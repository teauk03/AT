import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/lib/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: '로그인이 필요합니다.' });
    }

    const { title, content } = req.body;
    if (!title) {
        return res.status(400).json({ error: '제목은 필수입니다.' });
    }

    if (!content || content.length < 10) {
        return res.status(400).json({ error: '본문은 10자 이상이어야 합니다.' });
    }

    try {
        const db = (await connectDB).db("forum");
        await db.collection('post').insertOne({ userName: session.user.name, title, content });
        return res.status(200).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}