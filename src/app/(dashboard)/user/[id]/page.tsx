import {ObjectId} from "mongodb";
import {UserAccountComponent} from "@/components/User/UserAccount/UserAccount"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

// 사용자 데이터의 인터페이스
interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
}

// UserDataProps 인터페이스 -> 페이지의 props 형태
interface UserDataProps {
    user: UserData;
}

const UserAccountPage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;
    console.log(user)

    // 사용자(user)가 로그인하지 않았다면 로그인 페이지로 리다이렉트
    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return (
        <UserAccountComponent user={user}/>
    );
}

export default UserAccountPage;