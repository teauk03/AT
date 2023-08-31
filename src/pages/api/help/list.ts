import { connectDB } from "@/utils/mongoDb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_: NextApiRequest, response: NextApiResponse): Promise<void> => {
    const db = (await connectDB).db('main');
    let result = await db.collection('inquiry').find({}).toArray();

    response.status(200).json(result);
}

export default handler;