'use client'
import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './UserLoginMenu.module.scss';
import {Session} from "next-auth";
import DropdownMenu from "@/components/Navbar/Dropdown/DropdownMenu";
import {useSession} from "next-auth/react";

interface onClickProps {
    onClick: React.MouseEventHandler;
    isMenClicked: boolean;
}

const UserLoginMenu = ({onClick, isMenClicked}: onClickProps) => {
    // 세션 상태 사용
    const {data: session}: { data: Session | null } = useSession();

    return (
        <div className={styles['user-menu']}>
            {!session &&
                <>
                    <button className={styles['item-button']} onClick={onClick}>
                        {/*{session.user.image || ""}*/}
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={30}
                            height={30}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isMenClicked && <div className={styles['list-wrapper']}>
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
                    <div className={styles['img-box']} onClick={onClick}>
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={30}
                            height={30}
                        />
                        <span className={styles.info}>{session.user.name}</span>
                    </div>
                    {isMenClicked && <DropdownMenu session={session}/>}
                </>}
        </div>
    );
};

export default UserLoginMenu;