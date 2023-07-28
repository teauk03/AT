import connectDB from "@/lib/mongoDb";
import {Db, ObjectId} from "mongodb";
import {Comment} from "@/components/Comment/Comment";
import DetailsIndex from "@/components/Notice/DetailsPage/DetailsIndex";

const NoticeId = async (props: any): Promise<JSX.Element> => {
    const db: Db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })
    if (!result) return <div>Loading...</div>

    return (
        <>
            <DetailsIndex result={result}/>
            <Comment _id={result._id.toString()}/>
        </>
    )
}

export default NoticeId;