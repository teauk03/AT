import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const putReservationHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method !== 'PUT') return response.status(405).end();
    const session = await getServerSession(request, response, authOptions);
    if (!session) return response.status(403).json({ error: '로그인이 필요합니다.' });
    const {status}: { status: string } = request.body;

    try {
        const db = (await connectDB).db("reservation")
        let result = await db.collection('reservation_list').updateOne(
            {_id: new ObjectId(request.body._id)},
            {$set: request.body}
        );

        return response.status(200).json({
            message: '예약이 취소되었습니다.', result
        });
    } catch (error) {
        return response.status(500).json({
            error: 'Server error'
        });
    }
}

export default putReservationHandler;