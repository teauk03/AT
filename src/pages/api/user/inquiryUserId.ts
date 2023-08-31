import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";

const handlerInquiryUserId = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {
        try {
            let db = (await connectDB).db('main');
            const { birth, name } = request.body;

            /* Input 공백 여부 검사 */
            if (!birth) {
                return response.status(400).json({ error: 'Please write your Birth Date' })
            }

            if (!name) {
                return response.status(400).json({ error: 'Please write your name' })
            }

            /* 입력값이 DB와 일치하는지 확인 */
            const user = await db.collection('user_card').findOne({ birth, name});
            if (!user) {
                return response.status(404).json({ error: 'User not found' });
            }

            /* 유저 이메일로 인증메일 발송 (실제 이메일 서비스와 연동해야 함) */

            /* 데이터 베이스에서 유저 Email 조회 */
            const userEmail = user.email;
            return response.status(200).json({ success: 'Verification email sent', email: userEmail })

        } catch (err) {
            return response.status(500).json({error: 'Internal server error'})
        }
    }
}

export default handlerInquiryUserId;