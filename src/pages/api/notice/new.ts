import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/utils/mongoDb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: '로그인이 필요합니다.' });
    }

    if (session.user.role !== 'admin') {
        return res.status(403).json({ error: '관리자만 접근이 가능합니다.' });
    }

    const { title, content, division_title, division } = req.body;
    if (!title) {
        return res.status(400).json({ error: '제목은 필수입니다.' });
    }

    if (content === '') {
        return res.status(400).json({ error: '본문을 작성해주세요.' });
    }

    if (!division || (division !== '공지사항' && division !== '이벤트')) {
        return res.status(400).json({ error: '올바른 카테고리를 선택해주세요.' });
    }

    try {
        const db = (await connectDB).db("admin_user");
        const collectionName = division === '공지사항' ? 'notice' : 'event';
        await db.collection(collectionName).insertOne({ userName: session.user.name, title, content, division_title, division });
        return res.status(200).json({ message: '게시물이 성공적으로 작성되었습니다.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}