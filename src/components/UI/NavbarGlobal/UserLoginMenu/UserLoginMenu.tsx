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
                </>
            }
        </>
    );
};

export default UserLoginMenu;