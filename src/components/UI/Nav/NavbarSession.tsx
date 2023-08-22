import React from 'react';
import styles from "@/components/UI/Nav/Navbar.module.scss";
import NavbarLink from "@/components/UI/Nav/NavbarLink";
import SvgIconComponent from "@/components/SvgIconComponent";
import IsUserStatusModalMenu from "@/components/UI/Nav/IsUserStatusModalMenu/IsUserStatusModalMenu";

type NavbarSessionProps = {
    session: any;
    isMenClicked: boolean;
    setIsUserModalClicked: () => void;
}

const NavbarUserSession: React.FC<NavbarSessionProps> = ({session, isMenClicked, setIsUserModalClicked}) => {
    return (
        <div className={styles['nav-session']}>
            <>
                {!session &&
                    <>
                        <NavbarLink
                            className={`${styles['create-btn']} ${styles['selected-btn']}`}
                            href={`/join/`}
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
                    <div className={styles['user-session-wrap']} onClick={setIsUserModalClicked}>
                        <SvgIconComponent width={25} height={25} svgPath={'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'}/>
                        <SvgIconComponent width={25} height={25} svgPath={'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'}/>
                        <SvgIconComponent className={styles['responsive-hamburger']} width={25} height={25} svgPath={'M3.75' +
                            ' 6.75h16.5M3.75' +
                            ' 12h16.5m-16.5' +
                            ' 5.25h16.5'}/>

                        {/* 클릭시 DropdownMenu 노출 */}
                        {isMenClicked && <IsUserStatusModalMenu session={session}/>}
                    </div>
                }
            </>
        </div>
    );
};

export default NavbarUserSession;