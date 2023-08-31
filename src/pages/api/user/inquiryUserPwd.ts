import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { connectDB } from "@/utils/mongoDb";

const handlerInquiryResetPassword = async (request: NextApiRequest, response: NextApiResponse) => {
    const { email, name, birth } = request.body;

    try {
        const db = (await connectDB).db('main');
        const userCollection = db.collection('user_card');

        const user = await userCollection.findOne({ email, name, birthdate: birth });
        console.log('handlerInquiryResetPassword', user)

        if (!user) {
            return response.status(400).json({ error: 'User not found' });
        }

        /* 토큰 저장을 위한 컬렉션 정의 */
        const resetTokenCollection = db.collection('reset_token');

        /* 토큰 생성 & 토큰 저장 */
        const token = crypto.randomBytes(32).toString('hex');
        await resetTokenCollection.insertOne({
            email, token, createdAt: new Date(),
            /* 기타 필요한 정보 */
        });

        // 비밀번호 재설정 링크 생성 로직 등이 여기에 위치해야 할 것.
        /* 비밀번호 재설정 링크 생성 (메일로 보낼 링크) */
        const resetLink = `${process.env.SITE_URL}/reset?token=${token}`;
        console.log('Token :', token)

        /* 이메일 전송 로직 (실제 서비스에서는 nodemailer 등을 사용하여 이메일 전송) */
        console.log(`비밀번호 재설정 링크: ${resetLink}`);
        response.json({ success: '비밀번호 재설정 링크가 전송되었습니다.' });

    } catch (error) {
        response.status(500).json({ error: 'An error occurred' });
    }
};

export default handlerInquiryResetPassword;