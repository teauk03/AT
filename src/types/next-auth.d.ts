import {ObjectId} from "mongodb";

export let NextAuthOptions;
declare module "next-auth" {
    interface Session {
        user: {
            //image: any;
            // id: number;
            _id: ObjectId;
            name: string;
            email: string;
            birth: string;
            accessToken: string;
        }
    }
}