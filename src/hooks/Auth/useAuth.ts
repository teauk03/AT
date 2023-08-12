import { useSession } from "next-auth/react";

const useAuth = () => {
    const { data: session } = useSession();

    return {
        isLoggedIn: Boolean(session?.user),
        user: session?.user
    };
};

export default useAuth;