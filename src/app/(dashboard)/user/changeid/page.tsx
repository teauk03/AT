import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import styles from "@/components/User/Account.module.scss";
import SideNavigationMenu from "@/components/UI/NavbarAside/SideNavbar";
import AccountContainer from "@/components/User/AccountContainer";
import accountDetails from "@/data/account-menu.json";

const ChangeId = async () => {
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
                        <h2 className={styles['profile-title']}>이메일 변경</h2>
                    </div>

                    {/* Account Contents */}
                    {/* TODO: 타입 지정 및 별도의 컴포넌트로 분리 고려중 */}
                    <AccountContainer
                        user={user}
                        accountDetails={accountDetails.accountDetails}
                    />
                </main>
            </div>
        </div>
    )
};

export default ChangeId;