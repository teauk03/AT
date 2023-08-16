import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/utils/mongoDb";
import {IDivisionMapping} from "@/types/Borad";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: '로그인이 필요합니다.' });
    }

    const { title, content, division_title, division }: {
        title?: string;
        content?: string;
        division_title?: string;
        division?: keyof IDivisionMapping
    } = req.body;
    console.log('Request Body:', req.body);

    if (!title) {
        return res.status(400).json({ error: '제목은 필수입니다.' });
    }

    if (content === '') {
        return res.status(400).json({ error: '본문을 작성해주세요.' });
    }

    const collectionMapping: IDivisionMapping = {
        'SOUND VOLTEX': 'konami',
        'BeatMania IIDX': 'konami',
        'GITADORA': 'konami',
        'DANCERUSH': 'konami',
        'MAIMAI': 'namco',
        'Jubeat': 'konami',
        'popn music': 'konami',
        'DDR': 'konami',
        'EZ2AC': 'etc'
    };

    const collectionName = division ? collectionMapping[division] : undefined;

    if (!division_title) {
        return res.status(400).json({ error: '게임사 카테고리를 선택해주세요.' });
    }

    if (!division || !collectionName) {
        return res.status(400).json({ error: '게임 카테고리를 선택해주세요.' });
    }

    if (typeof collectionName === 'undefined') {
        return res.status(400).json({ error: '올바르지 않은 컬렉션 이름입니다.' });
    }

    try {
        const db = (await connectDB).db("forum");
        /* collectionName */
        await db.collection('post').insertOne({ userName: session.user.name, title, content, division_title, division });
        return res.status(200).json({ message: '게시물이 성공적으로 작성되었습니다.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}