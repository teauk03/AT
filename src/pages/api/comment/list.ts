import {ObjectId} from "mongodb";
import {connectDB} from "@/utils/mongoDb";
import {NextApiRequest, NextApiResponse} from "next";


const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    if (typeof request.query.id === 'string') {
        const db = (await connectDB).db('main');
        let result = await db.collection('comment').find({
            parent : new ObjectId(request.query.id)
        }).toArray()

        response.status(200).json(result);
    } else {
        response.status(400).json({ error: 'Invalid id parameter' });
    }
}

export default handler;