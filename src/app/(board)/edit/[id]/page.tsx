import {connectDB} from "@/utils/mongoDb";
import {ObjectId} from "mongodb";
import styles from "@/app/(board)/write/write.module.scss";

export default async function EditId(props: any): Promise<JSX.Element> {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    if (!result) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <form className={styles.form} action="/api/post/edit" method="POST">
                {/* Header */}
                <div className={styles['title-wrapper']}>
                    <input
                        style={{display:"none"}}
                        name="_id"
                        defaultValue={result._id.toString()}
                    />
                    <input
                        className={styles.title}
                        name="title"
                        type="text"
                        defaultValue={result.title}
                    />
                    <button className={styles['submit-btn']} type="submit">수정</button>
                </div>
                <div className={styles['title-validation']}>
                    <p className={styles['title-size']}>0 / 100</p>
                </div>

                {/* Main */}
                <textarea
                    className={styles.content}
                    name="content"
                    defaultValue={result.content}
                />
            </form>
        </div>
    )
}