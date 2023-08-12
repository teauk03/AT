import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import {EditIdProps} from "@/types/Borad";
import EditPostContainer from "@/components/Forum/Write/EditPostContainer";

async function EditPost(props: EditIdProps): Promise<JSX.Element> {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    if (!result) return <div>Loading...</div>;

    return (
        <EditPostContainer
            initialTitle={result.title}
            initialContent={result.content}
            postId={result._id.toString()}
        />
    )
}

export default EditPost;