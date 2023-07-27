'use client'
import React from 'react';
import styles from "@/components/Notice/LNB/NoticeNavbar.module.scss";
import Link from "next/link";

const NoticeClientNavbar = () => {

    return (
        <nav className={styles['snb-nav']} role="sub-navigation">
            <div className={styles['snb-title']}>
                <h2 className={styles.title}>Board</h2>
                <Link className={styles['link-write']} href={'/write/'}>글작성</Link>
            </div>
            <div className={styles['snb-menu']}>
                <h5>토픽</h5>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link href={"/"}>Sub Menu1</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>Sub Menu2</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>Sub Menu3</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>Sub Menu4</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={"/"}>Sub Menu5</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NoticeClientNavbar;