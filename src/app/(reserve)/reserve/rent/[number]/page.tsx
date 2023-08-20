import React from 'react';
import RentContainer from "@/components/Reserve/Rent/RentContainer";
import getUserServerSession from "@/utils/DB/getUserServerSession";

const Rent = async () => {
    const user = await getUserServerSession();
    if (user && 'redirect' in user) return user;
    return <RentContainer user={user}/>
};

export default Rent;