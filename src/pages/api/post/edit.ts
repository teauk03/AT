import {connectDB} from "@/utils/mongoDb";
import { NextApiRequest, NextApiResponse } from "next";
import {ObjectId} from "mongodb";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'POST') {

        let editNotice = {
            title : request.body.title,
            content : request.body.content
        };

        const db = (await connectDB).db("forum")
        let result = await db.collection('post')
            .updateOne(
            {_id: new ObjectId(request.body._id)},
            {$set: editNotice}
        );

        return response.status(200).redirect(302, '/forum');
    }
}