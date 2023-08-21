import {LoginComponent} from "@/components/Auth/Login";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const LoginPage = async (): Promise<{ redirect: { destination: string } } | JSX.Element> => {
    const session = await getServerSession(authOptions);
    if (session) return { redirect: { destination: '/' }}
    return <LoginComponent />
}

export default LoginPage;