import React from 'react';
import styles from "../Navbar.module.scss";

import Link from "next/link";
import {usePathname} from 'next/navigation';
import {MenuItemProps} from '@/types/Navigation';


const NavItems = ({gblMenuItems}: MenuItemProps) => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    return (
        <>
            {gblMenuItems.map((item) => (
                <li className={styles['nav-link']} key={item.route}>
                    <Link href={item.route}
                          className={`${styles['nav-item']} ${currentRoute === item.route ? styles['active-link'] :
                           styles['non-active-link']}`}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default NavItems;