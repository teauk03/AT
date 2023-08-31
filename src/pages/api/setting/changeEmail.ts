import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'PUT') {
        let requestBody = {
            _id: new ObjectId(request.body._id),
            email: request.body.email
        }

        const db = (await connectDB).db('main');
        const result = await db.collection('user_card')
            .updateOne(
                {_id: requestBody._id},
                {$set: requestBody}
            );

        return response.status(200).json({
            message: '이메일이 변경되었습니다.',result
        });
    }
}

export default handler;