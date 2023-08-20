import { connectDB } from "@/utils/mongoDb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const fetchCollectionItem = async(databaseName: string, collectionName: string, itemId: string): Promise<any> => {
    const USER_SESSION = await getServerSession(authOptions);
    const db = (await connectDB).db(databaseName);
    let result = await db.collection(collectionName).findOne({
        _id: new ObjectId(itemId)
    });

    return {result, USER_SESSION,};
}

export default fetchCollectionItem;