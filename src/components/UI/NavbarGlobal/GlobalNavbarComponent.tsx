'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from './Navbar.module.scss';

import Link from "next/link";
import Image from 'next/image'
import NavigationLogo from '@/../public/img/home-bg-Transparent.png';
import GlobalNavItems from "@/components/UI/NavbarGlobal/GlobalNavItems/GlobalNavItems";
import {useSession} from "next-auth/react";

import NavbarLink from "@/components/UI/NavbarGlobal/NavbarLink";
import SvgIconComponent from "@/components/SvgIconComponent";
import IsUserStatusModalMenu from "@/components/UI/NavbarGlobal/IsUserStatusModalMenu/IsUserStatusModalMenu";
import GLOBAL_NAV from "@/data/data-global-nav.json";
import {MenuItem} from '@/types/Navigation';


const GlobalNavbarComponent = () => {
    /* [Client] 유저 세션 사용 */
    const {data: session} = useSession();

    const [
        gblMenuItems,
        setGlbMenuItems
    ] = useState<MenuItem[]>(GLOBAL_NAV.ITEMS);

    /* [State] 모달 클릭 여부 */
    const [
        isMenClicked,
        setMenuClicked
    ] = useState(false);
    const modalRef = useRef<HTMLElement | null>(null);


    /* 함수 실행시 State false -> true */
    const setIsUserModalClicked = () => setMenuClicked(!isMenClicked);


    /* 사용자가 로그인하거나 로그아웃할 때마다 setGlbMenuItems 업데이트 */
    useEffect(() => {
        /* [Test] 로그인시 네비게이션 메뉴 Dashboard 탭 라우팅 : /user/${session.user._id} */
        if (session?.user?._id) {
            setGlbMenuItems((prevMenuItems) => {
                return prevMenuItems.map((item) =>
                    item.title === 'Dashboard' ? {...item, route: `/user/${session.user._id}`} : item
                );
            });
        }

        /* [Test] 로그인 하지 않을경우 네비게이션 메뉴 Dashboard 탭 라우팅 : / */
        else {
            setGlbMenuItems((prevMenuItems) =>
                prevMenuItems.map((item) =>
                    item.title === 'Dashboard' ? {...item, route: '/'} : item
                )
            );
        }
    }, [session]);


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setMenuClicked(false);
            }
        };

        /* 클릭 이벤트를 감지 -> handleClickOutside 함수를 호출 */
        document.addEventListener("mousedown", handleClickOutside);

        /* cleanup function: 컴포넌트 unmount -> 이벤트 리스너 제거 */
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    /* 관리자 페이지 렌더링 훅(useEffect) */
    useEffect(() => {
        const newGlbMenuItems = [...GLOBAL_NAV.ITEMS];

        /* 관리자인 경우 메뉴에 관리자 페이지를 추가 */
        if (session?.user?.role === 'admin') {
            newGlbMenuItems.push({title: 'Admin', route: '/admin'});
        }

        setGlbMenuItems(newGlbMenuItems);
    }, [session]);


    return (
        <nav className={styles.navbar} ref={modalRef}>
            {/* Navigation Home */}
            <div className={styles['navbar-wrapper']}>
                <Link className={styles['navbar-logo']} href={'/'}>
                    <Image
                        src={NavigationLogo}
                        width={120.79}
                        height={17}
                        alt="어택 로고 이미지"
                    />
                </Link>
            </div>

            <button className={styles['hamburger-btn']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-menu">
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
            </button>

            {/* [Navigation Link Wrap] Scss : Navbar.module.scss */}
            <ul className={styles['nav-link-wrap']}>
                <GlobalNavItems gblMenuItems={gblMenuItems}/>
            </ul>


            {/* [Navigation User Session Wrap] */}
            <div className={styles['login-menu-wrap']}>
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
                            <div className={styles['user-session-wrap']} onClick={setIsUserModalClicked}>
                                <SvgIconComponent width={25} height={25} svgPath={'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'}/>
                                <span className={styles['user-session-info']}>{session.user.name}</span>
                            </div>
                             {/* 클릭시 DropdownMenu 노출 */}
                            {isMenClicked && <IsUserStatusModalMenu session={session}/>}
                        </>
                    }
                </>
            </div>
        </nav>
    );
}

export default GlobalNavbarComponent;