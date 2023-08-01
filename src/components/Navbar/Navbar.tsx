'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from './Navbar.module.scss';
import Link from "next/link";
import UserLoginMenu from "@/components/Navbar/UserLoginMenu/UserLoginMenu";
import NavItems from "@/components/Navbar/NavItems/NavItems";
import {signIn} from "next-auth/react";

const NavbarComponent = () => {
    // [State] 모달 클릭 여부
    const [isMenClicked, setMenuClicked] = useState(false);
    const modalRef = useRef<HTMLElement | null>(null);

    // 함수 실행시 State false -> true
    const setIsUserModalClicked = () => setMenuClicked(!isMenClicked);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setMenuClicked(false);
            }
        };

        // 클릭 이벤트를 감지 -> handleClickOutside 함수를 호출
        document.addEventListener("mousedown", handleClickOutside);

        // cleanup function: 컴포넌트 unmount -> 이벤트 리스너 제거
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className={styles.header} ref={modalRef}>
            {/* Navigation Menu */}
            <nav className={styles.navigation} role={"GLB - Navigation"}>
                {/* Home Icon 133.971 x 31.994 */}
                <div className={styles.logo}>
                    <Link href="/">Arduino</Link>
                </div>
                {/* Navigation Item */}
                <NavItems/>
            </nav>

            {/* User Login Menu */}
            <UserLoginMenu onClick={setIsUserModalClicked} isMenClicked={isMenClicked}/>
        </header>
    );
}

export {NavbarComponent};