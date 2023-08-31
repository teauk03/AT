import { connectDB } from "@/utils/mongoDb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * 사용자 정보를 수정하는 API 핸들러 함수.
 * @param {NextApiRequest} request - Next.js API 요청 객체
 * @param {NextApiResponse} response - Next.js API 응답 객체
 * @returns {Promise<void>} - 프로미스를 반환하지만 실제로는 리턴되지 않음
 */
const handler = async(request: NextApiRequest, response: NextApiResponse)=> {
    if (request.method === 'POST') {
        /* 쿼리스트링 : URL에서 사용자 ID를 가져옴 */
        const userId = request.query.id;
        console.log(userId)

        if (typeof userId !== 'string' || !ObjectId.isValid(userId)) {
            return response.status(400).send("Invalid ID");
        }

        const userInformation = { _id: new ObjectId(userId) };
        const dataToChange = request.body;

        const db = (await connectDB).db('main');
        const result = await db.collection('user_card').updateOne(userInformation, { $set: dataToChange });

        /* 업데이트된 사용자 정보 다시 조회 */
        const updatedUser = await db.collection('user_card').findOne(userInformation);
        return response.status(200).json({message: '정보 변경 성공', result, updatedUser})
    }
}

export default handler;