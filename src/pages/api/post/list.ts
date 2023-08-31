import { NextApiRequest, NextApiResponse } from 'next';
import {connectDB} from "@/utils/mongoDb";
import getAllPostsFromForum from '@/utils/getPostsFromForum';

const listPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        /* page : 페이지 번호 (기본값: 1)
         * limit : 페이지당 아이템 수 (기본값: 10) */
        const page = Number(req.query.page) || 1;
        const posts = await getAllPostsFromForum({
            databaseName: 'main',
            collectionName: 'post',
            page,
        });


        /* 전체 게시물 수를 계산. */
        const db = (await connectDB).db("main");
        const totalPosts = await db.collection('post').countDocuments();
        res.status(200).json({posts, totalPosts});

    } catch (error) {
        res.status(500).json({ error: '오류가 발생했습니다.' });
    }
};

export default listPosts;