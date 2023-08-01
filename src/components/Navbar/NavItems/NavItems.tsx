'use client'
import React from 'react';
import styles from "./NavItems.module.scss";

import Link from "next/link";
import {menuItems} from '@/data/menuItem';

import {usePathname} from 'next/navigation';

const NavItems = () => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    return (
        <ul className={styles.menu}>
            {menuItems.map((item) => (
                <li className={styles['user-item']} key={item.route}>
                    <Link href={item.route}
                          className={currentRoute === item.route
                              ? styles['active-class']
                              : styles['non-active']
                          }>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;