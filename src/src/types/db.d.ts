import {ObjectId} from "mongodb";

interface Post {
    _id: string | ObjectId;
    title: string;
    content: string;
}