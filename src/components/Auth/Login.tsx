'use client'
import React from "react";
import styles from "./Login.module.scss";

import Link from "next/link";
import Image from "next/image"
import github from "/public/github.svg"
import google from "/public/google.svg"

import {useLogin} from "@/hooks/Auth/useSignIn";
import SocialLoginButton from "@/components/UI/Button/SocialLogin/SocialLoginButtons";
import PrimaryButton from "@/components/UI/Button/PrimaryButton";
import PrimaryCheckBox from "@/components/UI/CheckBox/PrimaryCheckBox";
import InputBox from "@/components/UI/Input/InputBox";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";
import NavigationLogo from "../../../public/img/home-bg-Transparent.png";
import SvgIconComponent from "@/components/SvgIconComponent";

const LoginComponent = (): JSX.Element => {
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        await login(email, password);
    }

    return (
        /* Container */
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.login}>
                    {/* Logo */}
                    <Link className={styles['login-logo']} href={'/'}>
                        <Image
                            src={NavigationLogo}
                            width={200.79}
                            height={17}
                            alt="어택 로고 이미지"
                        />
                    </Link>
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        {/* E-mail & Password Input Box */}
                        <InputBox name={'email'} type={'email'} label={'이메일을 입력하세요.'} autoComplete={'current-email'}/>
                        <InputBox name={'password'} type={'password'} label={'비밀번호를 입력하세요.'} autoComplete={'current-password'}/>

                        {/* Error */}
                        {error &&
                            <div className={styles['input-error']}>
                                <span className={styles['error-text']}>{error}</span>
                            </div>
                        }

                        {/* Remember Password & Check bok */}
                        <PrimaryCheckBox/>

                        {/* Login Button */}
                        <PrimaryButton disabled={isLoading} label={'로그인'} icon={<SvgIconComponent width={20} height={20} svgPath={'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'}/>}/>

                        {/* New Account */}
                        <div className={styles['create-account']}>
                            <span className={styles.link}><Link href={'/join'}>회원가입</Link></span>
                            <span className={styles.link}><Link href={'/id'}>아이디 찾기</Link></span>
                            <span className={styles.link}><Link href={'/pwd'}>비밀번호 변경</Link></span>
                        </div>

                        {/* Division Line */}
                        <DivisionLine text={'소셜 로그인'}/>

                        {/* Social Login */}
                        {/* TODO - 프로바이더 네이버 & 트위터로 변경 */}
                        <div className={styles['login-social']}>
                            <SocialLoginButton provider='github' src={github} alt='Login for Github'/>
                            <SocialLoginButton provider='google' src={google} alt='Login for Google'/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export {LoginComponent};