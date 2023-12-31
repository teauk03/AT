'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from './Navbar.module.scss';

import GlobalNavItems from "@/components/UI/Nav/GlobalNavItems";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import SvgIconComponent from "@/components/SvgIconComponent";
import IsUserStatusModalMenu from "@/components/UI/Nav/IsUserStatusModalMenu/IsUserStatusModalMenu";
import AppLink from "@/components/UI/Link/AppLink";
import NavigationLogo from "../../../../public/img/home-bg-Transparent.png";
import {FaRegCircleUser} from "react-icons/fa6";
import {BsBell} from "react-icons/bs";
import GLOBAL_NAV from "@/data/data-global-nav.json";
import {MenuItem} from '@/types/Navigation';


const GlobalNavbarComponent = () => {
    /* [Client] 유저 세션 사용 */
    const {data: session} = useSession();
    const [gblMenuItems, setGlbMenuItems] = useState<MenuItem[]>(GLOBAL_NAV.ITEMS);

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


    /* [State] 모달 클릭 여부 */
    const [isMenClicked, setMenuClicked] = useState(false);
    const modalRef = useRef<HTMLElement | null>(null);

    /* 함수 실행시 State false -> true */
    const setIsUserModalClicked = () => setMenuClicked(!isMenClicked);

    /*  클릭 이벤트를 감지하여 모달을 닫음 */
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


    /* [State] 반응형 (모바일 768) */
    const [isResponsiveOpen, setIsResponsiveOpen] = useState<boolean>(false);
    /* Navbar 아이콘 클릭시 반응형 메뉴 열고 닫기 */
    const isOnClickNavbar = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.preventDefault();
        setIsResponsiveOpen(isResponsiveOpen => !isResponsiveOpen);
        console.log('[State] 반응형 (모바일 768) : ', isResponsiveOpen)
    }

    /* 렌더링 */
    return (
        <header className={styles.header}>
            <nav className={styles.nav} ref={modalRef}>
                {/* 네비게이션 로고 */}
                <div className={styles['logo-wrapper']}>
                    <Link className={styles['navbar-logo']} href={'/'}>
                        <Image src={NavigationLogo} width={220.79} height={17} alt="어택 로고 이미지"/>
                    </Link>
                </div>

                <div className={styles.navLinkWrap}>
                    {/* 모바일 반응형 메뉴 */}
                    <div className={styles['responsive-menu']}>
                        {!isResponsiveOpen ? (
                            <SvgIconComponent width={25} height={25}
                                              svgPath={'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'}
                                              onClick={isOnClickNavbar}/>
                        ) : (
                            <SvgIconComponent width={25} height={25}
                                              svgPath={'M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'}
                                              onClick={isOnClickNavbar}/>
                        )}
                        {isResponsiveOpen &&
                            <GlobalNavItems gblMenuItems={gblMenuItems}/>
                        }
                    </div>

                    {/* 데스크탑 네비게이션 메뉴 */}
                    <GlobalNavItems gblMenuItems={gblMenuItems}/>

                    {/* 세션 관련 드롭다운 메뉴 */}
                    <div className={styles.navSession}>
                        <>
                            {/* 로그인, 회원가입 링크 */}
                            {!session &&
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
                            }

                            {/* 로그인 상태에서 세션 관련 요소 */}
                            {session?.user &&
                                <div className={styles.userSessionWrap} onClick={setIsUserModalClicked}>
                                    <BsBell/>
                                    <FaRegCircleUser/>
                                    {/* 클릭시 DropdownMenu 노출 */}
                                    {isMenClicked && <IsUserStatusModalMenu session={session}/>}
                                </div>
                            }
                        </>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default GlobalNavbarComponent;