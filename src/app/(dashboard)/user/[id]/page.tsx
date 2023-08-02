import {UserAccountComponent} from "@/components/User/UserAccount/UserAccount"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import accountDetails from "@/data/userAccountData";

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
        <UserAccountComponent user={user} accountDetails={accountDetails}/>
    );
}

export default UserAccountPage;