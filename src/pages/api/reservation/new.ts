import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

type NEW_RESERVATION_TYPE = {
    division: string;
    division_title: string;
    time: string;
    days: string;
    date: string;
    rent_status: string;
}

const handler = async (request: NextApiRequest, response:NextApiResponse) => {
    if (request.method !== 'POST') return response.status(405).end();
    const session = await getServerSession(request, response, authOptions);
    if (!session) return response.status(403).json({ error: '로그인이 필요합니다.' });
    const { division_title, division, time, days, date, rent_status }: NEW_RESERVATION_TYPE = request.body;

    try {
        /* Server Validation */
        const db = (await  connectDB).db("reservation")
        await db.collection('reservation_list').insertOne({
            user_id: session.user._id,
            name: session.user.name,
            division, division_title, time, days, date, rent_status
        });

        return response.status(200).json({
            message: '예약 신청이 완료되었습니다.'
        });
    } catch (error) {
        return response.status(500).json({
            error: 'Server error'
        });
    }
}

export default handler;