import {connectDB} from "@/utils/mongoDb";
import { NextApiRequest, NextApiResponse } from "next";
import {ObjectId} from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        let editNotice = {
            title : req.body.title,
            content : req.body.content
        };

        const db = (await connectDB).db("forum")
        let result = await db.collection('post').updateOne(
            {_id: new ObjectId(req.body._id)},
            {$set: editNotice}
        );

        return res.status(200).redirect(302, '/forum');
    }
}