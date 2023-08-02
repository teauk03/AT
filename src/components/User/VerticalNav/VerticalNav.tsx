'use client'
import React, {useState, useEffect} from "react";
import styles from "./VerticalNav.module.scss";

import Link from "next/link";
import {SLB_MENU_ITEMS} from '@/data/menuItem';
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {log} from "util";


const VerticalNav = (): JSX.Element => {
    const { data: session } = useSession();

    {/* Get the current route */}
    const currentRoute = usePathname();
    const [sblMenuItems, setSlbMenuItems] = useState(SLB_MENU_ITEMS);

    useEffect(() => {
        // 로그인시 네비게이션 메뉴 Basic Info 탭 라우팅 : /user/${session.user._id}
        if (session?.user?._id) {
            const newSlbMenuItems = SLB_MENU_ITEMS.map((item) =>
                item.title === 'Basic Info' ? { ...item, route: `/user/${session.user._id}` } : item
            );
            setSlbMenuItems(newSlbMenuItems);
        }

        else {
            const newSlbMenuItems = SLB_MENU_ITEMS.map((item) =>
                item.title === 'Basic Info' ? { ...item, route: '/' } : item
            )
            setSlbMenuItems(newSlbMenuItems);
        }
    }, [session]);



    return (
        <nav className={styles['side-nav']}>
            <div className={styles.menu}>
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
        </nav>
    )
}

export {VerticalNav};