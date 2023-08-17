import React from 'react';
import styles from "@/components/User/Account.module.scss";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SideNavigationMenu from "@/components/User/UserAsideNavbar/AsideNavbar";
import AccountContainer from "@/components/User/AccountContainer";
import USER_ACCOUNT from "@/data/Account/data-user-setting.json";

/* TODO : 클라이언트 컴포넌트로 분리 및 탈퇴 페이지 설계 */
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
                <form className={styles['profile-main']}>
                    {/* MyPage Title */}
                    <div className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>회원탈퇴</h2>
                    </div>

                    {/* Account Contents */}
                    <h1 className={styles['secede-sub-title']}>회원탈퇴 주의사항</h1>
                    <div className={styles['secede-contents']}>
                        <p className={styles['secede-item']}>
                            어택 로그인 및 서비스 불가, 게임캐릭터 삭제
                            회원탈퇴 시 어택 홈페이지에 로그인할 수 없으며, 일부 서비스 이용이 불가능합니다.
                            또한 보유하신 게임전적 등의 모든 게임 정보가 삭제되고 복구할 수 없습니다.
                        </p>
                        <p>
                            탈퇴 후 제한
                            회원탈퇴 후 15일 내에 로그인하시면 회원탈퇴 취소가 가능합니다.
                            회원탈퇴 처리된 어택ID는 30일 동안 재사용이 불가합니다.
                        </p>
                        <p>
                            개인정보 보관
                            회원탈퇴 시 이용자의 개인정보는 개인정보처리방침 [4. 개인정보의 파기]에 따라
                            탈퇴일로부터 30일간 보관 됩니다. 그 이후 관계법령에 따라 별도보관이 필요한 경우에는 별도 보관이
                            됩니다. 자세한 내용은 개인정보처리방침을 통해 확인하실 수 있습니다.
                        </p>
                    </div>

                    <div className={styles['delete-wrapper']}>
                        <button className={styles['delete-btn']}>회원탈퇴</button>
                    </div>
                </form>
            </main>
        </div>
    )
};

export default Secede;