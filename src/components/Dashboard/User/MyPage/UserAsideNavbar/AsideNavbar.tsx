'use client'
import React, {useState, useEffect, useMemo} from "react";
import styles from "./SideNavbar.module.scss";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import ACCOUNT_MENU from '@/data/Account/data-account-aside.json';


/**
 * SideNavigationMenu 컴포넌트
 * 사용자의 계정 정보에 따라 사이드 내비게이션 메뉴를 렌더링합니다.
 * 로그인한 사용자의 이름에 따라 링크가 동적으로 생성됩니다.
 * @returns JSX.Element 사이드 내비게이션 메뉴의 JSX 요소
 */
const SideNavigationMenu = (): JSX.Element => {
    /* 현재 세션 정보 */
    const {data: session} = useSession();
    /* 현재 라우트 경로 */
    const currentRoute = usePathname();
    /* 내비게이션 메뉴 아이템의 상태 */
    const slbMenuItems = useMemo(() => {
        if (session?.user?.name) {
            return ACCOUNT_MENU.ACCOUNT_DATA.map((item) => ({
                ...item, route: `${item.route}/${session.user.name}`
            }));
        }
        return ACCOUNT_MENU.ACCOUNT_DATA;
    }, [session]);

    return (
        <aside className={styles['aside-container']}>
            <div className={styles['aside-wrapper']}>
                <h2 className={styles['account-aside-title']}>내정보</h2>
                {slbMenuItems.map((item, index) => (
                    <Link key={index} className={`${styles.item} ${decodeURI(currentRoute || '') === item.route ? styles['item-active'] : styles['item-passive']}`} href={item.route}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default SideNavigationMenu;