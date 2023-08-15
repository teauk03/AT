import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from "@/utils/mongoDb";

interface IQuery {
    title?: { $regex: string; $options: string };
    body?: { $regex: string; $options: string };
    nickname?: { $regex: string; $options: string };
}

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const searchType = req.query.searchType as string; // 검색 필터 (제목, 본문, 닉네임)
        const searchQuery = req.query.searchQuery as string; // 검색어
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const db = (await connectDB).db("forum");

        /* 검색 쿼리 생성 */
        let query: IQuery = {};
        if (searchType === 'title') {
            query = { title: { $regex: searchQuery, $options: 'i' } };
        } else if (searchType === 'body') {
            query = { body: { $regex: searchQuery, $options: 'i' } };
        } else if (searchType === 'nickname') {
            query = { nickname: { $regex: searchQuery, $options: 'i' } };
        }

        /* 검색된 게시물 조회 */
        const posts = await db.collection('post')
            .find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .toArray();

        /* 검색된 게시물 수 계산 */
        const totalPosts = await db.collection('post').countDocuments(query);

        res.status(200).json({ posts, totalPosts });
    } catch (error) {
        res.status(500).json({ error: '오류가 발생했습니다.' });
    }
};

export default searchPosts;