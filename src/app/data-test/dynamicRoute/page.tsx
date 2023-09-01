import React from 'react';
import Link from "next/link";

const DynamicRoute = ({user}: any) => {
    return (
        <>
            <Link href={{
                pathname: `/data-test/dynamicRoute/${user?.name}`,
                query: { name: user?.name }
            }}>
                Dynamic : {user?.name}
            </Link>
        </>
    )
};

export default DynamicRoute;