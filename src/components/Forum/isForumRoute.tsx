'use client'
import React from 'react';
import ForumSideNavbar from "@/components/Forum/ForumAside/ForumAsideLeft";
import {usePathname} from "next/navigation";

const IsForumRoute = () => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/announcement' && '/event';


    return (
        <>
            {!isForumRoute && <ForumSideNavbar/>}
        </>
    );
};

export default IsForumRoute;