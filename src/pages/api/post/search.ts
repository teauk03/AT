import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from "@/utils/mongoDb";

interface IQuery {
    title?: { $regex: string; $options: string };
    body?: { $regex: string; $options: string };
    nickname?: { $regex: string; $options: string };
}

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
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

            const db = (await connectDB).db("admin_user");

            /* 검색 쿼리 생성 */
            let query: IQuery = {};
            if (searchType === 'title') {
                query = {title: {$regex: searchQuery, $options: 'i'}};
            } else if (searchType === 'body') {
                query = {body: {$regex: searchQuery, $options: 'i'}};
            } else if (searchType === 'nickname') {
                query = {nickname: {$regex: searchQuery, $options: 'i'}};
            }

            console.log(req.query);
            console.log(req.query.q)

            /* 검색된 게시물 조회 */
            const posts = await db.collection('notice')
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray();

            /* 검색된 게시물 수 계산 */
            const totalPosts = await db.collection('notice').countDocuments(query);

            res.status(200).json({posts, totalPosts});
        } catch (error) {
            res.status(500).json({error: '오류가 발생했습니다.'});
        }
    }
};

export default searchPosts;