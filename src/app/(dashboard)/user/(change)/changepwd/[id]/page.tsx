import React from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import SideNavigationMenu from "@/components/Dashboard/User/MyPage/UserAsideNavbar/AsideNavbar";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import InputBox from "@/components/UI/Input/InputBox";


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
                    <section>
                        <InputBox
                            name={'password'}
                            type={'password'}
                            label={'비밀번호를 입력하세요.'}
                            autoComplete={'current-password'}
                        />
                        <InputBox
                            name={'password'}
                            type={'password'}
                            label={'새로운 비밀번호를 입력하세요.'}
                            autoComplete={'current-password'}
                        />
                        <InputBox
                            name={'password'}
                            type={'password'}
                            label={'새로운 비밀번호를 다시 입력하세요.'}
                            autoComplete={'current-password'}
                        />
                    </section>
                    <button className={styles['account-form-btn']}>
                        변경하기
                    </button>
                </form>
            </main>
        </div>
    )
};

export default ChangePassword;