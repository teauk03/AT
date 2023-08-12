'use client'
import React from 'react';
import styles from './UserLoginMenu.module.scss';
import {Session} from "next-auth";
import {onClickProps} from "@/types/Navigation";
import Image from "next/image";
import {useSession} from "next-auth/react";
import DropdownMenu from "@/components/UI/NavbarGlobal/Dropdown/DropdownMenu";
import NavbarLink from "@/components/UI/NavbarGlobal/NavbarLink";


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
                            {/* SignIn */}
                            <li className={styles['list-item']}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={20} height={20} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                                </svg>
                                <NavbarLink
                                    className={styles.item}
                                    href={'/login/'}
                                    label={'로그인'}
                                />
                            </li>
                            {/* SignUp*/}
                            <li className={styles['list-item']}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={20} height={20} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
                                </svg>
                                <NavbarLink
                                    className={styles.item}
                                    href={'/join/'}
                                    label={'회원가입'}
                                />
                            </li>
                            {/* Help */}
                            <li className={styles['list-item']}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={20} height={20} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                                </svg>
                                <NavbarLink
                                    className={styles.item}
                                    href={'/support/'}
                                    label={'고객센터'}
                                />
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
                    {/* 클릭시 DropdownMenu 노출 */}
                    {isMenClicked && <DropdownMenu session={session}/>}
                </>}
        </div>
    );
};

export default UserLoginMenu;