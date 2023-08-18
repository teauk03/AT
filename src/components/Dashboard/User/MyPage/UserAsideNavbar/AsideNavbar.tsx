'use client'
import React, {useState, useEffect} from "react";
import styles from "./SideNavbar.module.scss";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import ACCOUNT_MENU from '@/data/Account/data-account-aside.json';


const SideNavigationMenu = (): JSX.Element => {
    const {data: session} = useSession();
    const currentRoute = usePathname();
    const [slbMenuItems, setSlbMenuItems] = useState(ACCOUNT_MENU.ACCOUNT_DATA);

    useEffect(() => {
        if (session?.user?.name) {
            const newSlbMenuItems = slbMenuItems.map((item) => ({
                ...item, route: `${item.route}/${session.user.name}`
            }));
            setSlbMenuItems(newSlbMenuItems);
        }
    }, [session, slbMenuItems]);


    return (
        <aside className={styles['aside-container']}>
            <div className={styles['aside-wrapper']}>
                <h2 className={styles['account-aside-title']}>내정보</h2>
                {slbMenuItems.map((item, index) => (
                    <Link
                        key={index}
                        className={`${styles.item} ${decodeURI(currentRoute || '') === item.route ? styles['item-active'] : styles['item-passive']}`}
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