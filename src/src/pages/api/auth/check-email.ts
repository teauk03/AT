import {NextApiRequest, NextApiResponse} from "next";
import {Db} from "mongodb";
import {connectDB} from "@/lib/database";

const checkEmailHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    const { email } = request.body;
    let db: Db = (await connectDB).db('forum');
    const existingUser = await db.collection('user_card').findOne({ email });

    if (existingUser) {
        return response.status(409).json({ message: '이미 존재하는 이메일입니다.' });
    }

    return response.status(200).json({ message: '사용 가능한 이메일입니다.' });
};

export default checkEmailHandler;