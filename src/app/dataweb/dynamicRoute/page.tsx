import React from 'react';
import Link from "next/link";

type userProps = {
    user: {
        name: string;
        age: number;
        email: string;
    };
}


const DynamicRoute: React.FC<userProps> = ({user}) => {
    console.log('user : ', user)
    return (
        <>
            <Link href={{
                pathname: `/dataweb/dynamicRoute/${user?.name}`,
                query: { name: user?.name }
            }}>
                Dynamic : {user?.name}
            </Link>
        </>
    )
};

export default DynamicRoute;