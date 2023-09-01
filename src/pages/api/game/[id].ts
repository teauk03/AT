import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";
import {Game, Image, Pricing} from "@/types/Game";

const selectData = async (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    const {
        query: {
            id
        }
    } = request;

    // id 타입검사 (타입이 string 이면 400 에러 반환)
    if (typeof id !== 'string') {
        return response.status(400).json({
            success: false,
            message: 'Invalid ID provided'
        })
    }

    try {
        // 몽고디비 연결
        const client = await connectDB;
        const db = client.db('GameScore');

        // 게임 데이터 조회
        const gameCollection = db.collection<Game>('Game');
        const gameData: Game | null = await gameCollection.findOne({
            game_id: parseInt(id)
        });

        // 가격 데이터 조회
        const pricingCollection = db.collection<Pricing>('Pricing');
        const pricingData: Pricing | null = await pricingCollection.findOne({
            game_id: parseInt(id)
        });

        // 이미지 데이터 조회
        const imageCollection = db.collection<Image>('Images');
        const imageData: Image | null = await imageCollection.findOne({
            game_id: parseInt(id)
        });

        // 데이터가 없는 경우 처리
        if (!gameData || !pricingData || !imageData) {
            return response.status(404).json({
                success: false,
                message: 'Data not found'
            })
        }

        // 성공시 응답
        response.status(200).json({
            success: true,
            data: {
                game: gameData,
                pricing: pricingData,
                image: imageData
            }
        })
    // 에러 캐치 (실패시 응답)
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export default selectData;