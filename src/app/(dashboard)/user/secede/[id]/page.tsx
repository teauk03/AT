import React from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SECEDE_JSON from "@/data/Account/Setting/data-user-secede.json";
import UserDeleteButton from "@/components/Dashboard/User/Setting/Button/UserDeleteButton";
import SideNavigationMenu from "@/components/Dashboard/User/Setting/AsideNavbar";

const Secede = async () => {
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
                    <div className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>회원탈퇴</h2>
                    </div>

                    {/* Account Contents */}
                    <section className={styles['profile-text-wrap']}>
                        <h2 className={styles['secede-sub-title']}>회원탈퇴 주의사항</h2>
                        {SECEDE_JSON.SECEDE_WARNINGS.map((warning, index) => (
                            <>
                                <h3 key={index}>{warning.title}</h3>
                                <p className={styles['secede-item']}>
                                    {warning.description}
                                </p>
                            </>
                        ))}
                    </section>

                    <UserDeleteButton/>
                </form>
            </main>
        </div>
    )
};

export default Secede;