'use client'
import React, {useState, useEffect} from "react";
import styles from "./SideNavbar.module.scss";

import Link from "next/link";
import ACCOUNT_MENU from '@/data/Account/data-account-aside.json';
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";


const SideNavigationMenu = (): JSX.Element => {
    const { data: session } = useSession();
    const currentRoute = usePathname();

    const [sblMenuItems, setSlbMenuItems] = useState(ACCOUNT_MENU.ACCOUNT_DATA);

    useEffect(() => {
        // 로그인시 네비게이션 메뉴 Basic Info 탭 라우팅 : /user/${session.user._id}
        if (session?.user?._id) {
            const newSlbMenuItems = ACCOUNT_MENU.ACCOUNT_DATA.map((item) =>
                item.title === '기본정보' ? { ...item, route: `/api/user/setting/${session.user.name}` } : item
            );
            setSlbMenuItems(newSlbMenuItems);
        }

        else {
            const newSlbMenuItems = ACCOUNT_MENU.ACCOUNT_DATA.map((item) =>
                item.title === '기본정보' ? { ...item, route: '/' } : item
            )
            setSlbMenuItems(newSlbMenuItems);
        }
    }, [session]);



    return (
        <aside className={styles['aside-container']}>
            <div className={styles['aside-wrapper']}>
                <h2 className={styles['account-aside-title']}>내정보</h2>
                {sblMenuItems.map((item, index) => (
                    <Link
                        key={index}
                        className={`${styles.item}
                        ${currentRoute === item.route ? styles['item-active'] : styles['item-passive']}`}
                        href={item.route}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default SideNavigationMenu;