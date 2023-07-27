import {Session as NextAuthSession} from "next-auth/core/types";

interface User {
    email: string;
}

interface Session extends NextAuthSession {
    user: User;
}

interface SignupData {
    year: string | number;
    month: string | number;
    day: string | number;
    name: string;
    email: string;
    password: string;
}

export {User, Session, SignupData}