import React from 'react';
import RentContainer from "@/components/Reserve/Rent/RentContainer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";



const Rent = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    if (!user) {
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        }
    }

    return <RentContainer/>
};

export default Rent;