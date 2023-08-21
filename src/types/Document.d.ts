import {ObjectId} from "mongodb";

/* [util] getDocsFromDocument Result Type */
interface Docs {
    _id: string | ObjectId;
    title?: string;
    content?: string;
    category?: number;
    device?: number;
    [key: string]: any;
}