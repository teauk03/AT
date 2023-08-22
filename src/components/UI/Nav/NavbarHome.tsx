import React from 'react';
import styles from "@/components/UI/Nav/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import NavigationLogo from "../../../../public/img/home-bg-Transparent.png";

const NavbarHome = () => {
    return (
        <div className={styles['navbar-wrapper']}>
            <Link className={styles['navbar-logo']} href={'/'}>
                <Image src={NavigationLogo} width={120.79} height={17} alt="어택 로고 이미지"/>
            </Link>
        </div>
    );
};

export default NavbarHome;