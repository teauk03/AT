import { NextApiRequest, NextApiResponse } from 'next'
import {connectDB} from "@/utils/mongoDb";
import {authOptions} from "../auth/[...nextauth]";
import {Db, ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
//import {Session} from "@/types/Auth";
import {Session} from "@/types/next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse | undefined> => {
    let session: Session | null = await getServerSession(req, res, authOptions)


    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }


    if ( req.method === 'POST' ) {
        if (!req.body || !req.body.comment || !req.body._id) {
            res.status(400).json({ message: 'Missing data in request body' });
            return;
        }


        let saveCommentData = {
            content : req.body.comment,
            parent : new ObjectId(req.body._id),
            author : session.user.email,
            name : session.user.name
        }


        try {
            const db: Db = (await connectDB).db("main");
            let result = await db.collection('comment').insertOne(saveCommentData)
            return res.status(200).redirect(302, '/main')


        } catch (err) {
            res.status(500).json({ message: 'Error saving comment to database' });
            return;
        }
    }
}

export default handler