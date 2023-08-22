import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const deleteReservationHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method !== 'POST') return response.status(405).end();
    const session = await getServerSession(request, response, authOptions);
    if (!session) return response.status(403).json({ error: '로그인이 필요합니다.' });

    try {
        const db = (await connectDB).db("reservation")
        let result = await db.collection('reservation_list').deleteOne(
            {_id: new ObjectId(request.body._id)},
        );

        if (result.deletedCount === 0) {
            return response.status(404).json(
                {error: '해당 ID의 예약이 없습니다.'}
            );
        } else {
            return response.status(200).json({
                message: '예약이 삭제되었습니다.'
            });
        }
    } catch (error) {
        return response.status(500).json({
            error: 'Server error'
        });
    }
}

export default deleteReservationHandler;