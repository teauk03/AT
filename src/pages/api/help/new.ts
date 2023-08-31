import {connectDB} from "@/utils/mongoDb";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from 'next';
import {getServerSession} from "next-auth/next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        /* Method Not Allowed */
        return res.status(405).end();
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: '로그인이 필요합니다.' });
    }

    const { device, category, title, content } = req.body;

    /* Validation */
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (!content) {
        return res.status(500).json({ message: 'Content is required' });
    }

    if (category === "" || device === "") {
        return res.status(500).json({ message: 'Select options are required' });
    }

    try {
        const db = (await connectDB).db("main");
        /* Insert into the "inquiry" collection */
        await db.collection('inquiry').insertOne({
            user_id: session.user._id,
            name: session.user.name,
            email: session.user.email,
            title,
            content,
            category,
            device
        });
/*
        return res.status(200).json({ message: 'Inquiry submitted successfully' });
*/
        return res.redirect(302, '/support')

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}

export default handler;