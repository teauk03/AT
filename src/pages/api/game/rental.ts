import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {Game, Image, Pricing} from "@/types/Game";

const rentalData = async (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    try {
        const client = (await connectDB);
        const db = client.db('GameScore');

        const gameCollection = db.collection<Game>('Game');
        const gameData: Game[] = await gameCollection.find({}).toArray();

        const pricingCollection = db.collection<Pricing>('Pricing');
        const pricingData: Pricing[] = await pricingCollection.find({}).toArray();

        const imageCollection = db.collection<Image>('Images');
        const imageData: Image[] = await imageCollection.find({}).toArray();

        response.status(200).json({
            success: true,
            data: {
                games: gameData,
                pricings: pricingData,
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

export default rentalData;