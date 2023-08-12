import React from 'react';
import styles from "../Navbar.module.scss";

import Link from "next/link";
import {usePathname} from 'next/navigation';
import {MenuItemProps} from '@/types/Navigation';


const NavItems = ({gblMenuItems}: MenuItemProps) => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    return (
        <ul className={styles.menu}>
            {gblMenuItems.map((item) => (
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