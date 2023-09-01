import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {Image} from "@/types/Game";

const mainData = async (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    try {
        const client = (await connectDB);
        const db = client.db('GameScore');
        const imageCollection = db.collection<Image>('Images');

        const imageData: Image[] = await imageCollection.find({}).toArray();
        response.status(200).json({
            success: true,
            data: {
                images: imageData
            }
        })
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export default mainData;