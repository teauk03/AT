import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const putReservationHandler = async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method !== 'PUT') return response.status(405).end();
    const session = await getServerSession(request, response, authOptions);
    if (!session) return response.status(403).json({ error: '로그인이 필요합니다.' });

    try {
        const db = (await connectDB).db("reservation")
        const updateQuery = {
            _id: new ObjectId(request.body._id),
            rent_status: request.body.rent_status
        };

        let result = await db.collection('reservation_list').updateOne(
            {_id: new ObjectId(request.body._id)},
            {$set: updateQuery}
        );

        let message = '';
        switch (request.body.rent_status) {
            case '예약완료':
                message = '예약이 완료되었습니다.';
                break;
            case '예약거절':
                message = '예약이 거절되었습니다.';
                break;
            case '예약취소':
                message = '예약이 취소되었습니다.';
                break;
            default:
                message = '알 수 없는 상태입니다.';
        }

        return response.status(200).json({message});
    } catch (error) {
        return response.status(500).json({
            error: 'Server error'
        });
    }
}

export default putReservationHandler;