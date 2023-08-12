import {ObjectId} from "mongodb";

/* [...nextAuth].ts - User Session */
declare module "next-auth" {
    interface Session {
        user: {
            //image: any;
            // id: number;
            _id: ObjectId;
            name: string;
            email: string;
            birth: string;
            role: string;
            accessToken: string;
        }
    }
}