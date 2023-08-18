import { connectDB } from "@/utils/mongoDb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'POST') {
        /* 쿼리스트링 : URL에서 사용자 ID를 가져옴 */
        const 사용자ID = request.query.id;

        if (typeof 사용자ID !== "string" || !ObjectId.isValid(사용자ID)) {
            return response.status(400).send("Invalid ID");
        }

        const 사용자정보 = { _id: new ObjectId(사용자ID) };
        const 바꿀데이터 = request.body;

        const db = (await connectDB).db('forum');
        const result = await db.collection('user_card').updateOne(사용자정보, { $set: 바꿀데이터 });
        return response.status(200).redirect(302, `/`);
    }
}