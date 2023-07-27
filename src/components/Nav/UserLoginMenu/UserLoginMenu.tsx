'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './UserLoginMenu.module.scss';
import {Session} from "next-auth";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";
import {useSession} from "next-auth/react";

const UserLoginMenu = () => {
    const {data: session}: { data: Session | null } = useSession();
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <div className={styles['user-menu']}>
            {
                !session &&
                <>
                    <button className={styles['item-button']}>
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={30}
                            height={30}
                        />
                    </button>
                    {/* Dropdown Menu */}
                    <div className={styles.list}>
                        <Link className={styles['list-item']} href={'/login/'}>로그인</Link>
                        <Link className={styles['list-item']} href={'/join/'}>회원가입</Link>
                        <Link className={styles['list-item']} href={'/'}>고객센터</Link>
                    </div>
                </>
            }
            {
                session?.user &&
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
                    </div>
                    <li className={styles['user-item']}>
                        <span>{session.user.name}</span>
                        {isMenuVisible && <DropdownMenu session={session}/>}
                    </li>
                </>
            }
        </div>
    );
};

export default UserLoginMenu;