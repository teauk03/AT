'use client'
import React from "react";
import styles from "./VerticalNav.module.scss";

const VerticalNav = (): JSX.Element => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__menu}>
                <h1>Setting</h1>
                <li className={styles.nav__menuItem}>Profile</li>
                <li className={styles.nav__menuItem}>Notification</li>
                <li className={styles.nav__menuItem}>Display</li>
                <li className={styles.nav__menuItem}>Language</li>
                <li className={styles.nav__menuItem}>Help</li>
           </ul>
        </nav>
    )
}

export {VerticalNav};