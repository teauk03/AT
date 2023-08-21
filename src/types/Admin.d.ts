import {ObjectId} from "mongodb";

export interface MANAGEMENT_POSTS_TYPE {
    _id: ObjectId;
    userName: string;
    title: string;
    content: string;
}

export interface MANAGEMENT_USERS_TYPE {
    name: string;
}

export interface MANAGEMENT_RESERVATION_TYPE {
    _id: ObjectId;
    user_id: ObjectId;
    name: string;
    division_title: string;
    time: string;
    days: string;
}