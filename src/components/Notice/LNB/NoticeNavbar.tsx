'use client'
import React from 'react';
import styles from "@/components/Notice/LNB/NoticeNavbar.module.scss";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const NoticeClientNavbar = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    const handleNewPostOnClick = (e: React.MouseEvent) => {
        if (status === 'unauthenticated') {
            e.preventDefault();
            alert('로그인 후 이용 가능합니다.');
            router.push('/login');
        } else {
            router.push('/write');
        }
    }

    return (
        <nav className={styles['snb-nav']} role="sub-navigation">
            <div className={styles['snb-title']}>
                <h2 className={styles.title}>Board</h2>
                <Link
                    className={styles['link-write']}
                    href={'/write'}
                    onClick={handleNewPostOnClick}
                >
                    글작성
                </Link>
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