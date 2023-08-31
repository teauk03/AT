// import
import NextAuth, {NextAuthOptions} from "next-auth";
import bcrypt from 'bcrypt';

import {connectDB} from "@/utils/mongoDb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import {ObjectId} from "mongodb";
import {isValidEmailFormat, hasPassword, isEmailNotEmpty} from "@/utils/validation/validation";

/** NextAuth 인증 옵션 설정 */
export const authOptions: NextAuthOptions = {
    /** 인증 제공자(providers) 설정 */
    providers: [
        // GitHub
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),

        // Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        // Kakao
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),


        /** 자격증명 제공자 설정 */
        CredentialsProvider({
            id: "credentials",
            name: "credentials",

            /**
             * 사용자에게 보여질 입력 필드.
             * credentials : 사용자가 로그인 폼에서 입력한 이메일과 비밀번호
             **/
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "password", type: "password"},
            },

            /** 자격증명을 이용한 사용자 인증 ( MongoDb ) */
            async authorize(credentials: any): Promise<any> {
                /*  main DB 접근 */
                let db = (await connectDB).db('GameScore');

                /* 자격증명이 없는 경우 (credentials: null || undefined 또는 객체에 email, password 속성이 없는 경우) */
                if (!credentials) throw new Error("No credentials provided");

                /* 이메일 형식 검증 */
                if (!isValidEmailFormat(credentials.email)) throw new Error("Invalid email format");

                /* 이메일이 없는 경우 에러 반환 */
                if (!credentials.email || !isEmailNotEmpty(credentials.email)) throw new Error("Invalid email format");

                /* 비밀번호가 없는 경우 에러 반환 */
                if (!credentials.password || !hasPassword(credentials.password)) throw new Error("Invalid password format");


                /* DB 에서 일반 사용자(customer) 및 비밀번호 조회 or 검증 */
                let user = await db.collection('user')
                    .findOne({email: credentials.email});
                if (!user) throw new Error("User not found");

                /* 일반 사용자(customer) 계정의 비밀번호 검증 */
                const isPasswordValid: boolean = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) throw new Error("Invalid password");

                /* [MS2 UserAccount] 로그인 날짜 업데이트 */
                const lastAccess = new Date().toISOString().slice(0, 10)
                    .replace(/-/g,".");
                await db.collection('user')
                    .updateOne({ _id: new ObjectId(user._id)}, { $set: {lastAccess}})

                console.log('User : ', user)
                return user;
            }
        })
    ],


    /** 세션 설정: JWT 사용 */
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, // 1일 (24시간)
        updateAge: 24 * 60 * 60, // 24시간마다 세션 정보 업데이트
    },


    /** 콜백 설정: JWT & 세션 */
    callbacks: {
        //5. JWT 콜백: 사용자의 역할과 ID를 토큰에 추가
        jwt: async ({token, user, account}: { token: any; user: any; account: any }) => {
            if (user) {
                token.user = {};
                token.user._id = user._id;
                token.user.name = user.name;
                token.user.email = user.email;
                token.user.password = user.password;
                token.user.nickname = user.nickname;
                token.user.phone = user.phone;
                token.user.birth = user.birth;
                token.user.role = user.role;
                token.user.lastAccess  = user.lastAccess;

                /* 다른 곳에서 "Summary"와 "Skills"를 가져와서 추가 */
                token.user.summary = user.summary || '소개를 입력하세요.';
                token.user.skills = user.skills || '즐겨하는 게임을 입력하세요';

                /* 세션 만료 시간 */
                //token.expires = new Date().getTime() + 24 * 60 * 60 * 1000;
            }
            return token;
        },

        /** 세션 콜백: 사용자의 ID와 역할을 세션에 추가 */
        session: async ({session, token}: { session: any; token: any }): Promise<any> => {
            if (token.user) session.user = token.user;
            return session;
        },
    },

    /** 경로 */
    pages: {
        signIn: '/login',
        signOut: '/join',
        //error: '/auth/error', // Error code passed in query string as ?error=
        //verifyRequest: '/auth/verify-request', // (used for check email message)
        //newUser: '/auth/new-user' // New users will be directed here on first sign in
    },

    /** 어댑터 & 시크릿키 */
    adapter: MongoDBAdapter(connectDB),
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);