'use client'
import React from 'react';
import styles from "@/components/UI/Nav/Navbar.module.scss";
import AppLink from "@/components/UI/Link/AppLink";
import {signOut, useSession} from "next-auth/react";
import NavbarLink from "@/components/UI/Nav/NavbarLink";

const LoginButton = () => {
    const {data: session} = useSession();

    /* 로그아웃 */
    const handleSignOut = async (event: any): Promise<void> => {
        event.preventDefault();
        await signOut({callbackUrl: '/login'});
    }
    return (
        <>
            {!session ? (
                <>
                    <AppLink
                        className={`${styles['create-btn']}`}
                        href={`/join/`}
                        label={'회원가입'}
                    />
                    <AppLink
                        className={styles['create-btn']}
                        href={'/login/'}
                        label={'로그인'}
                    />
                </>
            ) : (
                <>
                    <AppLink
                        className={styles['create-btn']}
                        href={`/mypage/${session.user.name}`}
                        label={'마이페이지'}
                    />
                    <AppLink
                        className={styles['create-btn']}
                        href={'/login'}
                        label={'로그아웃'}
                        onClick={handleSignOut}
                    />
                </>
            )}
        </>
    );
};

export default LoginButton;