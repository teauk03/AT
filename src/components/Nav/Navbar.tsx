'use client'
import React from "react";
import styles from './Navbar.module.scss';
import menuItems from '@/app/data/menuItem';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import UserLoginMenu from "@/components/Nav/UserLoginMenu/UserLoginMenu";

const NavbarComponent = () => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    return (
        <header className={styles.header}>
            <nav className={styles.navigation} role={"Global Navigation"}>
                {/* Home Icon */}
                <div className={styles.logo}>
                    <Link className={styles.link} href="/">Attack</Link>
                </div>

                {/* Navigation Item */}
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
            </nav>

            {/* User Login Menu */}
            <UserLoginMenu />
        </header>
    );
}

export default NavbarComponent;