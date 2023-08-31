import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from "@/utils/mongoDb";

interface IQuery {
    title?: { $regex: string; $options: string };
    body?: { $regex: string; $options: string };
    nickname?: { $regex: string; $options: string };
}

/* 검색 엔드포인트 */
const handleSearchPostsEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const searchType = req.query.searchType as string; // 검색 필터 (제목, 본문, 닉네임)
            const searchQuery = req.query.q as string;
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            if (!['title', 'body', 'nickname'].includes(searchType)) {
                res.status(400).json({error: '잘못된 검색 유형입니다.'});
                return;
            }

            const db = (await connectDB).db("main");

            /* 검색 쿼리 생성 */
            let query: IQuery = {
                [searchType]: { $regex: searchQuery, $options: 'i' }
            };

            /* 검색된 게시물 조회 */
            const posts = await db.collection('post')
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray();

            /* 검색된 게시물 수 계산 */
            const totalPosts = await db.collection('post')
                .countDocuments(query);

            res.status(200).json({posts, totalPosts});
        } catch (error) {
            res.status(500).json({error: '오류가 발생했습니다.'});
        }
    }
};

export default handleSearchPostsEndpoint;