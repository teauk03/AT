'use client'
import React, {useState} from 'react';
import styles from "../Navbar.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {MenuItemProps} from '@/types/Navigation';
import {useSession} from "next-auth/react";

const GlobalNavItems = ({gblMenuItems}: MenuItemProps) => {
    const {data: session} = useSession();
    const currentRoute = usePathname();
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => setShowSubMenu(true);
    const handleMouseLeave = () => setShowSubMenu(false);

    return (
        <ul className={styles['nav-wrap']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Global Navigation */}
            {gblMenuItems.map((item) => (
                <li className={styles['nav-link']} key={item.route}>
                    <Link href={item.route}
                          className={`${styles['nav-item']} ${currentRoute === item.route ? styles['active-link'] : styles['non-active-link']}`}>
                        {item.title}
                    </Link>
                    {/* Mega Navigation Menu */}
                    {showSubMenu && item.subMenu && item.subMenu.length > 0 && (
                        <div className={styles['mega-menu']}>
                            <ul className={styles['sub-menu']} key={item.route}>
                                {item.subMenu.map((subItem) => (
                                    <li className={styles['sub-nav-link']} key={subItem.route}>
                                        <Link
                                            href={subItem.title === "마이페이지" && session?.user?._id
                                            ? `/user/mypage/${session.user.name}`
                                            : subItem.route}
                                              className={styles['sub-nav-item']}>
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default GlobalNavItems;