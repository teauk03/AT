import {Session as NextAuthSession} from "next-auth/core/types";

interface User {
    email: string;
}

interface Session extends NextAuthSession {
    user: User;
}

interface SignupData {
    birth: string;
    name: string;
    email: string;
    password: string;
}

export {User, Session, SignupData}