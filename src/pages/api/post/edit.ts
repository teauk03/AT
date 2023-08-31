import {connectDB} from "@/utils/mongoDb";
import { NextApiRequest, NextApiResponse } from "next";
import {ObjectId} from "mongodb";

const putPostHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {

        let editNotice = {
            title : request.body.title,
            content : request.body.content
        };

        const db = (await connectDB).db("main")
        let result = await db.collection('post')
            .updateOne(
            {_id: new ObjectId(request.body._id)},
            {$set: editNotice}
        );

        return response.status(200).redirect(302, '/main');
    }
}

export default putPostHandler;