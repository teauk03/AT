import React from 'react';
import styles from "@/components/User/Account.module.scss";
import SideNavigationMenu from "@/components/User/UserAsideNavbar/AsideNavbar";
import AccountContainer from "@/components/User/AccountContainer";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import accountDetails from "@/data/Account/account-menu.json";


const ChangePassword = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    /* 사용자(user)가 로그인하지 않았다면 로그인 페이지로 리다이렉트 */
    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return (
        <div className={styles['profile-container']}>
            {/* Side Navbar */}
            <SideNavigationMenu/>

            <div className={styles['profile-wrapper']}>
                <main className={styles['profile-main']}>
                    {/* MyPage Title */}
                    <div className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>비밀번호 변경</h2>
                    </div>


                </main>
            </div>
        </div>
    )
};

export default ChangePassword;