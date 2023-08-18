'use client'
import React, { useState } from 'react';
import styles from "../Navbar.module.scss";
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

    const renderSubMenu = (subMenu: MenuItem[]) => (
        <ul className={styles['sub-menu']}>
            {subMenu.map((subItem) => (
                <li className={styles['sub-nav-link']} key={subItem.route}>
                    <Link href={subItem.title === "마이페이지" && session?.user?._id ? `/user/mypage/${session.user.name}` : subItem.route} className={styles['sub-nav-item']}>
                        {subItem.title}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const renderMainNavItem = (item: MenuItem) => {
        const isActive = currentRoute === item.route || (item.subMenu && item.subMenu.some(subItem => currentRoute === subItem.route));
        return (
            <li className={styles['nav-link']} key={item.route}>
                <Link href={item.route}
                      className={`${styles['nav-item']} ${isActive ? styles['active-link'] : styles['non-active-link']}`}>
                    {item.title}
                </Link>

                {/* Mega Navigation Menu */}
                {showSubMenu && item.subMenu && item.subMenu.length > 0 && (
                    <div className={styles['mega-menu']}>
                        {/* renderSubMenu : 서브 메뉴 렌더링 함수 호출 */}
                        {renderSubMenu(item.subMenu)}
                    </div>
                )}
            </li>
        );
    };

    return (
        <ul className={styles['nav-wrap']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Global Navigation : 메인 네비게이션 아이템 렌더링 */}
            {gblMenuItems.map(renderMainNavItem)}
        </ul>
    );
};

export default GlobalNavItems;