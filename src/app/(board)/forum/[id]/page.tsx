import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import {Comment} from "@/components/Comment/Comment";
import DetailsIndex from "@/components/Forum/DetailsPage/DetailsIndex";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const NoticeId = async (props: any): Promise<JSX.Element> => {
    const USER_SESSION = await getServerSession(authOptions);

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    if (!result) return <div>Loading...</div>

    return (
        <>
            <DetailsIndex
                result={result}
                USER_SESSION={USER_SESSION}
            />
            <Comment _id={result._id.toString()}/>
        </>
    )
}

export default NoticeId;