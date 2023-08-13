// import {connectDB} from "@/utils/mongoDb";
// import {Post} from "@/types/Borad";
//
// const getAllPostsFromForum = async (): Promise<Post[]> => {
//     const db = (await connectDB).db("forum");
//     let result: Post[] = await db.collection('post').find().toArray() as Post[];
//
//     result = result.map((noticeItem: Post) => {
//         noticeItem._id = noticeItem._id.toString();
//         return noticeItem;
//     });
//
//     return result;
// };
//
// export default getAllPostsFromForum;