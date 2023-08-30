'use client';
import React from 'react';
import styles from "./Navbar.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {MenuItemProps} from '@/types/Navigation';

const GlobalNavItems = ({gblMenuItems}: MenuItemProps) => {
    const {data: session} = useSession();
    const currentRoute = usePathname();

    return (
        <ul className={styles.navMenu}>
            {/* Global Navigation : 메인 네비게이션 아이템 렌더링 */}
            {gblMenuItems.map((item) => {
                const isActive = currentRoute === item.route || (item.subMenu && item.subMenu.some(subItem => currentRoute === subItem.route));
                const myPageLink = session?.user?._id ? `/user/mypage/${session.user.name}` : '/login';

                return (
                    <li className={styles.navItem} key={item.route}>
                        <Link
                            href={item.title === "마이페이지" ? myPageLink : item.route}
                            className={`${styles.navLink} ${isActive ? styles.activeLink : styles.nonActiveLink}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default GlobalNavItems;