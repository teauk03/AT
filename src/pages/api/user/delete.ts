import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";

interface DeleteRequestBody {
    userId: string; // 사용자 아이디
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'DELETE') {
        try {
            const db = (await connectDB).db('main');
            const requestBody: DeleteRequestBody = request.body;
            console.log(request.body)
            /* 사용자 계정 삭제 로직 */
            const result = await db.collection('user_card').deleteOne({
                _id: new ObjectId(requestBody.userId)
            });

            if (result.deletedCount === 1) {
                return response.status(200).json({ message: '회원탈퇴가 완료되었습니다.' });
            } else {
                return response.status(404).json({ message: '해당 사용자를 찾을 수 없습니다.' });
            }
        } catch (error) {
            return response.status(500).json({ message: '서버 오류가 발생했습니다.' });
        }
    } else {
        return response.status(405).json({ message: '잘못된 요청입니다.' });
    }
}

export default handler;