import connectDB from "@/app/lib/mongoDb";
import {Post} from "@/types/db";
import {Db} from "mongodb";

const getPosts = async (): Promise<Post[]> => {
    const db: Db = (await connectDB).db("forum");
    let result: Post[] = await db.collection('post').find().toArray() as Post[];

    result = result.map((noticeItem: Post) => {
        noticeItem._id = noticeItem._id.toString();
        return noticeItem;
    });

    return result;
};

export {getPosts};