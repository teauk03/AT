import React from "react";
import styles from "@/components/Dashboard/User/Account.module.scss";
import {getServerSession} from "next-auth";
import AccountContainer from "@/components/Dashboard/User/AccountContainer"
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import USER_ACCOUNT from "@/data/Account/data-user-setting.json";
import SideNavigationMenu from "@/components/Dashboard/User/Setting/AsideNavbar";


const Setting = async () => {
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
                <form className={styles['profile-form']} >

                    {/* MyPage Title */}
                    <div className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>기본정보</h2>
                    </div>

                    {/* Account Contents */}
                    <AccountContainer user={user} accountData={USER_ACCOUNT.ITEMS}/>
                </form>
            </main>
        </div>
    );
}

export default Setting;