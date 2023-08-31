import {connectDB} from "@/utils/mongoDb";
import {NextApiRequest, NextApiResponse} from "next";
import {ObjectId} from "mongodb";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {
        try {
            const db = (await connectDB).db('main');
            const body = request.body;

            let result = await db.collection('post').deleteOne(
                {_id: new ObjectId(body._id)}
            );

            if (result.deletedCount === 0) {
                return response.status(404).json(
                    {error: '해당 ID의 포스트가 없습니다.'}
                );
            } else {
                return response.status(200).json({
                    message: '게시글이 삭제되었습니다.'
                });
            }
        } catch (error) {
            return response.status(500).json({
                error: '서버 내부 오류가 발생했습니다.'
            });
        }
    }
}

export default handler