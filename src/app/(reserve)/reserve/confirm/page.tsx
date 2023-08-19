import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import ReservationConfirmContainer from "@/components/Reserve/Confirm/ReservationConfirmContainer";

const ReservationConfirm = async () => {
    // const session = await getServerSession(authOptions);
    // const user = session?.user || null;
    //
    // if (!user) {
    //     return {
    //         redirect: {
    //             destination: "login",
    //             permanent: false,
    //         },
    //     }
    // }

    return <ReservationConfirmContainer/>
};

export default ReservationConfirm;