'use client'
import React from "react";
import styles from "./VerticalNav.module.scss";

import Link from "next/link";
import {sideMenuItem} from '@/data/menuItem';
import {usePathname} from "next/navigation";

const VerticalNav = (): JSX.Element => {
    {/* Get the current route */}
    const currentRoute = usePathname();

    return (
        <nav className={styles['side-nav']}>
            <div className={styles.menu}>
                {sideMenuItem.map((item, index)=> (
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