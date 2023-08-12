import {connectDB} from "@/utils/mongoDb";
import {Docs} from "@/types/Document";

const getDocs = async (): Promise<Docs[]> => {
    const db = (await connectDB).db("forum");
    let result: Docs[] = await db.collection('inquiry').find().toArray() as Docs[];

    result = result.map((docsItem: Docs) => {
        docsItem._id = docsItem._id.toString();
        return docsItem;
    });

    return result;
};

export default getDocs;