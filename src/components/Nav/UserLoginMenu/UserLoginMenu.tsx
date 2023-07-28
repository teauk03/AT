'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './UserLoginMenu.module.scss';
import {Session} from "next-auth";
import DropdownMenu from "@/components/Nav/Dropdown/DropdownMenu";
import {useSession} from "next-auth/react";

const UserLoginMenu = () => {
    const {data: session}: { data: Session | null } = useSession();
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <div className={styles['user-menu']}>
            {!session &&
                <>
                    <button
                        className={styles['item-button']}
                        onClick={() => setMenuVisible(!isMenuVisible)}
                    >
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={30}
                            height={30}
                        />
                    </button>
                    {/* Dropdown Menu */}
                    {isMenuVisible && <div className={styles['list-wrapper']}>
                        <ul className={styles.list}>
                            <li className={styles['list-item']}>
                                <Link className={styles.item} href={'/login/'}>로그인</Link>
                            </li>
                            <li className={styles['list-item']}>
                                <Link className={styles.item} href={'/join/'}>회원가입</Link>
                            </li>
                            <li className={styles['list-item']}>
                                <Link className={styles.item} href={'/'}>고객센터</Link>
                            </li>
                        </ul>
                    </div>}
                </>}

            {/* 로그인시 노출 */}
            {session?.user &&
                <>
                    <div
                        className={styles['img-box']}
                        onClick={() => setMenuVisible(!isMenuVisible)}
                    >
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={30}
                            height={30}
                        />
                        <span className={styles.info}>{session.user.name}</span>
                    </div>
                    {isMenuVisible && <DropdownMenu session={session}/>}
                </>}
        </div>
    );
};

export default UserLoginMenu;