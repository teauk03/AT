import {LoginComponent} from "@/components/Auth/Login";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getProviders} from "next-auth/react";

const LoginPage = async (): Promise<{ redirect: { destination: string } } | JSX.Element> => {
    const session = await getServerSession(authOptions);
    if (session) return { redirect: { destination: '/' }}

    const providers = await getProviders()
    console.log(providers)

    return (
        <>
            <LoginComponent />
        </>
    );
}

export default LoginPage;