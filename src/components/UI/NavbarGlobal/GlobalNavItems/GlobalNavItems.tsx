'use client'
import React, { useState } from 'react';
import Link from "next/link";
import styles from "../Navbar.module.scss";
import { MenuItemProps } from '@/types/Navigation';
import {usePathname} from "next/navigation";

const GlobalNavItems = ({ gblMenuItems }: MenuItemProps) => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    const [
        activeSubMenu, setActiveSubMenu
    ] = useState<string | null>(null);

    const handleMouseEnter = (title: string) => {
        setActiveSubMenu(title);
    };

    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    };

    return (
        <ul className={styles['nav-wrap']} onMouseLeave={handleMouseLeave}>
            {/* Global Navigation */}
            {gblMenuItems.map((item) => (
                <li
                    className={styles['nav-link']}
                    key={item.route}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                >
                    <Link href={item.route} className={`${styles['nav-item']} ${currentRoute === item.route ? styles['active-link'] :
                        styles['non-active-link']}`}>
                        {item.title}
                    </Link>
                    {/* Mega Navigation Menu */}
                    {activeSubMenu === item.title && item.subMenu && (
                        <ul className={styles['sub-menu']}>
                            {item.subMenu.map((subItem) => (
                                <li className={styles['sub-nav-link']} key={subItem.route}>
                                    <Link href={subItem.route} className={styles['sub-nav-item']}>
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default GlobalNavItems;