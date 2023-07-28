import { NextApiRequest, NextApiResponse } from 'next'
import {connectDB} from "@/lib/database";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Db, ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {Session} from "../../../types/Auth";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse | undefined> => {
    let session: Session | null = await getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({
            message: "You must be logged in."
        });
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
            author : session.user.email
        }

        try {
            const db: Db = (await connectDB).db("forum")
            let result = await db.collection('comment').insertOne(saveCommentData)
            return res.status(200).redirect(302, '/notice')
        } catch (err) {
            res.status(500).json({ message: 'Error saving comment to database' });
            return;
        }
    }
}

export default handler