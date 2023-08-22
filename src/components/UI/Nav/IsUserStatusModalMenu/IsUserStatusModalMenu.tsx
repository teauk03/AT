'use client'
import React from 'react';
import styles from "@/components/UI/Nav/IsUserStatusModalMenu/IsUserStatusModalMenu.module.scss";
import NavbarLink from "@/components/UI/Nav/NavbarLink";
import SvgIconComponent from "@/components/SvgIconComponent";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";

/* isUserStatusModalMenu */
const IsUserStatusModalMenu = ({session}: { session: Session | null }) => {
    const handleSignOut = async (event: any): Promise<void> => {
        event.preventDefault();
        await signOut({callbackUrl: '/login'});
    }

    /* Account */
    const NAVBAR_MENU_ACCOUNT = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <SvgIconComponent width={25} height={25} svgPath={'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'}/>
            </div>
            {/* 동적 라우팅 적용
              * Ex: /user/mypage/${session.user.name} = /user/mypage/테스트어드민1 */}
            <NavbarLink
                href={session?.user?._id ? `/user/mypage/${session.user.name}` : '/'}
                label={session?.user?.name}
            />
        </li>
    )

    /* Setting */
    const NAVBAR_MENU_SETTING = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={20}
                     height={20} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </div>
            <NavbarLink
                href={session?.user?._id ? `/user/setting/${session.user.name}` : '/'}
                label={'설정'}
            />
        </li>
    )

    /* Support */
    const NAVBAR_MENU_SUPPORT = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <SvgIconComponent width={20} height={20} svgPath={'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'}/>
            </div>
            <NavbarLink
                className={styles.item}
                href={'/support/'}
                label={'고객센터'}
            />
        </li>
    )

    /* Logout */
    const NAVBAR_MENU_LOGOUT = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <SvgIconComponent width={20} height={20} svgPath={'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'}/>
            </div>
            <NavbarLink
                href={'/login'}
                label={'로그아웃'}
                onClick={handleSignOut}
            />
        </li>
    )

    /* Return */
    return (
        <div className={styles.dropdown}>
            <div className={styles['dropdown-section']}>
                {/* User Information */}
                <ul className={styles['dropdown-section-user']}>
                    {NAVBAR_MENU_ACCOUNT()}
                    {NAVBAR_MENU_SETTING()}
                    {NAVBAR_MENU_SUPPORT()}
                    {NAVBAR_MENU_LOGOUT()}
                </ul>
            </div>
        </div>
    );
};

export default IsUserStatusModalMenu;