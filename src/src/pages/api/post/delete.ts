import {connectDB} from "@/lib/database";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            let db = (await connectDB).db('forum')
            const body = JSON.parse(req.body)

            let result = await db.collection('post').deleteOne({
                _id : new ObjectId(body._id)
            });

            if (result.deletedCount === 0) {
                return res.status(404).json({ error: '해당 ID의 포스트가 없습니다.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
        }
        return res.status(200).json({ message: '게시글이 삭제되었 습니다.' });
    }
}

export default handler