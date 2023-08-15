'use client'
import React from 'react';
import styles from './UserLoginMenu.module.scss';
import {Session} from "next-auth";
import {onClickProps} from "@/types/Navigation";
import {useSession} from "next-auth/react";
import DropdownMenu from "@/components/UI/NavbarGlobal/Dropdown/DropdownMenu";
import NavbarLink from "@/components/UI/NavbarGlobal/NavbarLink";
import SvgIconComponent from "@/components/SvgIconComponent";


/**
 * (네비게이션) 유저 세션
 * Ex : <UserLoginMenu onClick={setIsUserModalClicked} isMenClicked={isMenClicked}/>
 * Scss : UserLoginMenu.module.scss */
const UserLoginMenu = ({onClick, isMenClicked}: onClickProps) => {
    // 세션 상태 사용
    const {data: session}: { data: Session | null } = useSession();
    console.log(onClick)

    return (
        <>
            {!session &&
                <>
                    <NavbarLink
                        className={`${styles['create-btn']} ${styles['selected-btn']}`}
                        href={'/join/'}
                        label={'회원가입'}
                    />
                    <NavbarLink
                        className={styles['create-btn']}
                        href={'/login/'}
                        label={'로그인'}
                    />
                </>
            }

            {/* 로그인시 노출 */}
            {session?.user &&
                <>
                    <div className={styles['user-session-wrap']} onClick={onClick}>
                        <SvgIconComponent width={25} height={25} svgPath={'M17.982 18.725A7.488 7.488 0 0012' +
                            ' 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'}/>
                        <span className={styles['user-session-info']}>{session.user.name}</span>
                    </div>
                    {/* 클릭시 DropdownMenu 노출 */}
                    {isMenClicked && <DropdownMenu session={session}/>}
                </>
            }
        </>
    );
};

export default UserLoginMenu;