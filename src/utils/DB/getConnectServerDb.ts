import {connectDB} from "@/utils/mongoDb";
import {Docs} from "@/types/Document";

type DatabaseResult = {
    results: any[];
};

const getConnectServerDb = async (databaseName: string, collectionName: string, limit: number, filter: { [key: string]: any } = {}): Promise<DatabaseResult> => {
    const db = (await  connectDB).db(databaseName)
    let results = await db.collection(collectionName)
        .find(filter)
        .sort({ "days": -1 }) // 최신 예약을 위한 정렬, "days"는 예약 날짜를 나타내는 필드명이라 가정합니다.
        .limit(limit) // 5개만 가져오기
        .toArray();

    results = results.map((item: any) => {
        item._id = item._id.toString();
        return item;
    });

    return {results};
}

export default getConnectServerDb;