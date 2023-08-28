'use client'
import React from 'react';
import styles from "@/components/UI/Nav/IsUserStatusModalMenu/IsUserStatusModalMenu.module.scss";
import NavbarLink from "@/components/UI/Nav/NavbarLink";
import SvgIconComponent from "@/components/SvgIconComponent";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";
import {AiOutlineSetting} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import {FiLogOut} from "react-icons/fi";
import {BsQuestionCircle} from "react-icons/bs";

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
                <FaRegCircleUser/>
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
                <AiOutlineSetting/>
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
                <BsQuestionCircle/>
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
                <FiLogOut/>
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