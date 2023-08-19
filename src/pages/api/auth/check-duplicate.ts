import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/utils/mongoDb";

const handlerCheckDuplicate = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    const { nickname, email } = request.body;

    try {
        let db = (await connectDB).db('forum');

        // 닉네임 중복 검사
        const existingNickname = await db.collection('user_card').findOne({ nickname });
        if (existingNickname) {
            response.status(409).json({ message: '이미 존재하는 닉네임입니다.' });
            return;
        }

        // 이메일 중복 검사
        const existingEmail = await db.collection('user_card').findOne({ email });
        if (existingEmail) {
            response.status(409).json({ message: '이미 존재하는 이메일입니다.' });
            return;
        }

        response.status(200).json({ message: '사용 가능한 닉네임과 이메일입니다.' });
    } catch (error) {
        response.status(500).json({ message: '인터넷 또는 서버 오류 발생' });
    }
}

export default handlerCheckDuplicate;