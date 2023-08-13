import { NextApiRequest, NextApiResponse } from 'next';
import getAllPostsFromForum from '@/utils/getPostsFromForum';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        /* page : 페이지 번호 (기본값: 1)
         * limit : 페이지당 아이템 수 (기본값: 10) */
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const posts = await getAllPostsFromForum('post', page, limit);
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ error: '오류가 발생했습니다.' });
    }
};