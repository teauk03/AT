// import
import NextAuth, {NextAuthOptions} from "next-auth";
import bcrypt from 'bcrypt';

import connectDB from "@/lib/mongoDb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import {Db} from "mongodb";
import {isValidEmail, hasPassword, hasValidEmail} from "@/utils/validation";

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
            id: "credential",
            name: "credentials",

            /**
             * 사용자에게 보여질 입력 필드.
             * credentials : 사용자가 로그인 폼에서 입력한 이메일과 비밀번호
             **/
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "password", type: "password"},
                name: {label: "Name", type: "text"},
                year: {label: "Year", type: "text"},
                month: {label: "Month", type: "text"},
                day: {label: "Day", type: "text"},
            },

            /** 자격증명을 이용한 사용자 인증 ( MongoDb ) */
            async authorize(credentials: any): Promise<any> {
                // 자격증명이 없는 경우 (credentials: null || undefined 또는 객체에 email, password 속성이 없는 경우)
                if (!credentials) throw new Error("No credentials provided");

                // 이메일 형식 검증
                //if (!isValidEmail(credentials.email)) throw new Error("Invalid email format");

                // 이메일이 없는 경우 에러 반환
                if (!credentials.email || !hasValidEmail(credentials.email)) throw new Error("Invalid email format");

                // 비밀번호가 없는 경우 에러 반환
                if (!credentials.password || !hasPassword(credentials.password)) throw new Error("Invalid password format");

                // DB 에서 사용자 조회
                let db: Db = (await connectDB).db('forum');

                // 사용자 검증
                const user = await db.collection('user_card').findOne({ email: credentials.email });
                if (!user) throw new Error("User not found");

                // 비밀번호 검증
                const isPasswordValid: boolean = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) throw new Error("Invalid password");

                return {
                    name: user.name,
                    email: user.email,
                    year: user.year,
                    month: user.month,
                    date: user.date,
                };
            }
        })
    ],


    /** 세션 설정: JWT 사용 */
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 //30일
        //updateAge: 24 * 60 * 60, // 24시간
    },


    /** 콜백 설정: JWT & 세션 */
    callbacks: {
        //5. JWT 콜백: 사용자의 역할과 ID를 토큰에 추가
        jwt: async ({token, user, account}: { token: any; user: any; account: any }) => {
            if (user) {
                token.user = {};
                token.user.name = user.name;
                token.user.email = user.email;
                token.user.phoneNumber = user.phoneNumber;
                token.user.birthdate = user.birthdate;
                //token.user.image = account?.picture
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