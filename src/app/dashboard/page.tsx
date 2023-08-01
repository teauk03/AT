import {connectDB} from "@/lib/database";
import {Db, ObjectId} from "mongodb";
import { UserAccountComponent } from "@/components/User/UserAccount/UserAccount"
import {NextPageContext} from "next";
import {ParsedUrlQuery} from "querystring";

interface Params extends ParsedUrlQuery {
    id: string;
}

interface MyContext extends NextPageContext {
    params: Params;
}

interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
}

interface UserDataProps {
    userData: UserData;
}

export async function getServerSideProps(context: MyContext) {
    const db: Db = (await connectDB).db("forum")
    let userData = await db.collection('user_card').findOne({
        _id: new ObjectId(context.params.id)
    })

    // return the data as props
    return {
        props: {
            userData: JSON.parse(JSON.stringify(userData)) // MongoDB data needs to be serialized before sending
        }
    }
}

const UserAccountPage = (props: UserDataProps) => {
    return (
        <>
            <UserAccountComponent userData={props.userData}/>
        </>
    )
}

export default UserAccountPage;