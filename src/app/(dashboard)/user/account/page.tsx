import React from "react";
import styles from "@/components/User/Account.module.scss";
import {getServerSession} from "next-auth";
import SideNavigationMenu from "@/components/UI/NavbarAside/SideNavbar";
import AccountContainer from "@/components/User/AccountContainer";
import Link from "next/link";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
//import {accountDetails} from "@/data/userAccountData";
import accountDetails from "@/data/account-menu.json";


const UserAccount = async () => {
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
                    {/* TODO: 타입 지정 및 별도의 컴포넌트로 분리 고려중 */}
                    <AccountContainer
                        user={user}
                        accountDetails={accountDetails.accountDetails}
                    />

                    {/* 삭제 버튼 */}
                    {/* TODO : Link 태그로 변경 */}
                    {/* TODO : 클라이언트 컴포넌트로 분리 및 탈퇴 페이지 설계 */}
                    <div className={styles['delete-wrapper']}>
                        <Link className={styles['delete-btn']} href={'/'}>
                            회원탈퇴
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserAccount;