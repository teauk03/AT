import {ObjectId} from "mongodb";

// Result Type
interface DetailsPostType {
    _id: ObjectId;
    userId: string;
    title: string;
    content: string;
}

export type {DetailsPostType}