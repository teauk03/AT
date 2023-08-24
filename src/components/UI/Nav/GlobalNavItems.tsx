'use client';
import React, { useState } from 'react';
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemProps, MenuItem } from '@/types/Navigation';
import { useSession } from "next-auth/react";

const GlobalNavItems = ({ gblMenuItems }: MenuItemProps) => {
    const { data: session } = useSession();
    const currentRoute = usePathname();
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => setShowSubMenu(true);
    const handleMouseLeave = () => setShowSubMenu(false);

    return (
        <div className={styles['nav-link-wrap']}>
            <ul className={styles['nav-wrap']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* Global Navigation : 메인 네비게이션 아이템 렌더링 */}
                {gblMenuItems.map((item) => {
                    const isActive = currentRoute === item.route || (item.subMenu && item.subMenu.some(subItem => currentRoute === subItem.route));
                    const myPageLink = session?.user?._id ? `/user/mypage/${session.user.name}` : '/login';

                    return (
                        <li className={styles['nav-link']} key={item.route}>
                            <Link href={item.title === "마이페이지" ? myPageLink : item.route} className={`${styles['nav-item']} ${isActive ? styles['active-link'] : styles['non-active-link']}`}>
                                {item.title}
                            </Link>

                            {/* Mega Navigation Menu */}
                            {showSubMenu && item.subMenu && item.subMenu.length > 0 && (
                                <div className={styles['mega-menu']}>
                                    <ul className={styles['sub-menu']}>
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.route} className={styles['sub-nav-link']}>
                                                <Link href={subItem.title === "마이페이지" ? myPageLink : subItem.route} className={styles['sub-nav-item']}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GlobalNavItems;