import connectDB from "@/lib/mongoDb";
import {Post} from "@/types/db";
import {Db} from "mongodb";

const getPosts = async (): Promise<Post[]> => {
    try {
        const db: Db = (await connectDB).db("forum");
        const postCollection = db.collection('post');
        let posts: Post[] = await postCollection.find().toArray() as Post[];

        posts = posts.map((post: Post) => {
            post._id = post._id.toString();
            return post;
        });

        return posts;
    } catch(error) {
        console.error("Failed to get posts:", error);
        throw error;
    }
};

export {getPosts};