'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from './Navbar.module.scss';

import GlobalNavItems from "@/components/UI/Nav/GlobalNavItems";
import NavbarUserSession from "@/components/UI/Nav/NavbarSession";

import {useSession} from "next-auth/react";
import GLOBAL_NAV from "@/data/data-global-nav.json";
import {MenuItem} from '@/types/Navigation';
import Link from "next/link";
import Image from "next/image";
import NavigationLogo from "../../../../public/img/home-bg-Transparent.png";


const GlobalNavbarComponent = () => {
    /* [Client] 유저 세션 사용 */
    const {data: session} = useSession();
    const [gblMenuItems, setGlbMenuItems] = useState<MenuItem[]>(GLOBAL_NAV.ITEMS);

    /* [State] 모달 클릭 여부 */
    const [isMenClicked, setMenuClicked] = useState(false);
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
        <header className={styles.header}>
            <nav className={styles.nav} ref={modalRef}>
                <div className={styles['navbar-wrapper']}>
                    <Link className={styles['navbar-logo']} href={'/'}>
                        <Image src={NavigationLogo} width={120.79} height={17} alt="어택 로고 이미지"/>
                    </Link>
                </div>
                <GlobalNavItems gblMenuItems={gblMenuItems}/>
                <NavbarUserSession session={session} isMenClicked={isMenClicked} setIsUserModalClicked={setIsUserModalClicked}/>
            </nav>
        </header>
    );
}

export default GlobalNavbarComponent;