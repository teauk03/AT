import {connectDB} from "@/utils/mongoDb";

type DatabaseResult = {
    results: any[];
};

const getConnectServerDb = async (databaseName: string, collectionName: string): Promise<DatabaseResult> => {
    const db = (await  connectDB).db(databaseName)
    const results = await db.collection(collectionName)
        .find()
        .sort({ "days": -1 }) // 최신 예약을 위한 정렬, "days"는 예약 날짜를 나타내는 필드명이라 가정합니다.
        .limit(5) // 5개만 가져오기
        .toArray();

    return {results};
}

export default getConnectServerDb;