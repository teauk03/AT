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
            _id: new ObjectId(request.body.reservationId),
            rent_status: request.body.rent_status // 또는 필요한 필드만 업데이트
        };

        console.log('Updating with query:', updateQuery); // 쿼리 로깅

        let result = await db.collection('reservation_list').updateOne(
            {_id: new ObjectId(request.body.reservationId)},
            {$set: updateQuery}
        );
        console.log(result)

        const message = request.body.rent_status === '예약완료' ? '예약이 완료되었습니다.' : '예약이 거절되었습니다.';
        return response.status(200).json({message, result});
    } catch (error) {
        return response.status(500).json({
            error: 'Server error'
        });
    }
}

export default putReservationHandler;