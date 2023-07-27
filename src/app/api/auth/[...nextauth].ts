// import
import NextAuth, {NextAuthOptions} from "next-auth";
import bcrypt from 'bcrypt';

import connectDB from "@/app/lib/mongoDb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import {Db} from "mongodb";

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

        // KaKao
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),


        /** 자격증명 제공자 설정 */
        CredentialsProvider({
            id: "email-password-credential",
            name: "credentials",

            /** 사용자에게 보여질 입력 필드를 정의. */
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
                if (!credentials || !credentials.email || !credentials.password) throw new Error("Missing credentials");

                let db: Db = (await connectDB).db('forum');
                const user = await db.collection('user_card').findOne({ email: credentials.email });
                if (!user) throw new Error("User not found");

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
        signIn: '/user/login',
    },

    /** 어댑터 & 시크릿키 */
    adapter: MongoDBAdapter(connectDB),
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);