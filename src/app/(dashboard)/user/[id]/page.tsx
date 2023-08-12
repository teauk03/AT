import React from "react";
import styles from "@/components/User/Account.module.scss";
import {getServerSession} from "next-auth";
import SideNavigationMenu from "@/components/UI/NavbarSide/SideNavbar";
import AccountContainer from "@/components/User/AccountContainer"
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {accountDetails} from "@/data/dataUserAccount";


const UserProfile = async () => {
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
                <main className={styles.main}>
                    {/* Account Contents */}
                    <AccountContainer
                        user={user}
                        accountDetails={accountDetails}
                    />
                </main>
            </div>
        </div>
    );
}

export default UserProfile;