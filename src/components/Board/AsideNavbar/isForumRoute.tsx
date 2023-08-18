'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import styles from "@/components/Board/Forum/ForumItem.module.scss";
import ForumAsideLeftMenu from "@/components/Board/AsideNavbar/ForumAsideLeftMenu";

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