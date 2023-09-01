import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from "next";
import {connectDB} from "@/utils/mongoDb";

const handlerUserEditInfo = async (
    request: NextApiRequest,
    response: NextApiResponse
): Promise<void> => {
    /* PUT 요청 처리 */
    if (request.method === 'PUT') {
        /* 요청 쿼리 스트링에서 사용자 ID 검색 */
        const {
            id
        } = request.query;

        /* 클라이언트에서 변경된 사용자 정보를 변수에 할당 */
        const {
            name,
            birth
        } = request.body;

        try {
            let db = (await  connectDB).db('main');

            /* 데이터 베이스에서 유저 고유 ID 조회 */
            const existingUser = await db.collection('user_card').findOne({
                _id: new ObjectId(id as string)
            });
            if (!existingUser) {
                return response.status(404).json({
                    error: 'User not found'
                });
            }


            /* 데이터 베이스 내 이미 존재하는 닉네임 검사 */
            const updatedUser = await db.collection('user_card').findOne({
                $or: [{name}]
            });
            if (updatedUser && updatedUser._id.toString() !== id) {
                return response.status(404).json({
                    error: 'Username already exists.'
                });
            }


            /* 변경 내용 DB 저장 */
            await db.collection('user_card').updateOne({
                _id: new ObjectId(id as string)
            }, {
                $set: {
                    name: name,
                    birth: birth
                }
            });

            /* Response */
            return response.status(200).json({
                message: 'Information has been successfully changed.'
            });
            //return response.status(200).json(updatedUser);

        } catch (error) {
            return response.status(500).json({
                error: 'Internal server error'
            })
        }
    }


    /* 그 외의 요청 메소드에 대해 405 Method Not Allowed 에러 반환 */
    response.setHeader("Allow", ["PUT"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
}

export default handlerUserEditInfo;