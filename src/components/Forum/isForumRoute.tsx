'use client'
import React from 'react';
import ForumSideNavbar from "@/components/Forum/ForumAside/ForumAsideLeft";
import {usePathname} from "next/navigation";
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumAsideLeftMenu from "@/components/Forum/ForumAside/ForumAsideLeftMenu";

const IsForumRoute = () => {
    /* usePathname : 현재 URL 경로(값)를 가져옴 */
    const pathname  = usePathname();
    const isForumRoute = pathname === '/announcement' && '/event';


    return (
        <>
            {!isForumRoute && (
                <aside className={styles['aside-slb']} role="sub-navigation">
                    {/* Sub Menu */}
                    <ForumAsideLeftMenu/>
                </aside>
            )}
        </>
    );
};

export default IsForumRoute;