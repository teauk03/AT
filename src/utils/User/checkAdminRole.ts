import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const checkAdminRole = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user?.role !== 'admin') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
};

export default checkAdminRole;