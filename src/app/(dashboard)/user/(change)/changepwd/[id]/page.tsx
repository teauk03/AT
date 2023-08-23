import React from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import UserPasswordUpdateButton from "@/components/Dashboard/User/Setting/Button/UserPasswordUpdateButton";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import SideNavigationMenu from "@/components/Dashboard/User/Setting/AsideNavbar";


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
            <main className={styles['profile-wrapper']}>
                <form className={styles['profile-form']}>
                    {/* MyPage Title */}
                    <section className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>비밀번호 변경</h2>
                    </section>
                    <UserPasswordUpdateButton user={user}/>
                </form>
            </main>
        </div>
    )
};

export default ChangePassword;