'use client'
import React, {useState} from "react";
import styles from "./Login.module.scss";

import Link from "next/link";
import Image from "next/image"
import github from "/public/github.svg"
import google from "/public/google.svg"

import {useLogin} from "@/hooks/Auth/useSignIn";
import SocialLoginButton from "@/components/UI/Button/SocialLogin/SocialLoginButtons";
import AuthButton from "@/components/UI/Button/AuthButton";
import PrimaryCheckBox from "@/components/UI/Input/CheckBox/PrimaryCheckBox";
import InputBox from "@/components/UI/Input/InputBox";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";
import NavigationLogo from "../../../public/img/home-bg-Transparent.png";

interface MouseHoverEventProps {
    type: string;
}

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

    /* 잠금, 오픈 아이콘 상태관리 */
    const [isHoverButton, setIsHoverButton] = useState(false)
    const handleMouseHover = (event: React.MouseEvent<HTMLElement>) => {
        if (event.type === 'mouseenter') {
            setIsHoverButton(true);
        } else if (event.type === 'mouseleave') {
            setIsHoverButton(false);
        }
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
                                <span className={styles['error-text']}>
                                    {error}
                                </span>
                            </div>
                        }

                        {/* Remember Password & Check bok */}
                        <PrimaryCheckBox label={`간편 로그인 정보 저장`}/>

                        {/* Login Button */}
                        <AuthButton
                            isHoverButton={isHoverButton}
                            handleMouseHover={handleMouseHover}
                            disabled={isLoading}
                            label={'로그인'}
                            isHoverable={true}
                            showIcon={true}
                        />

                        {/* New Account */}
                        <div className={styles['create-account']}>
                            <Link href={'/join'}>
                                <span className={styles.link}>회원가입</span>
                            </Link>
                            <Link href={'/id'}>
                                <span className={styles.link}>아이디 찾기</span>
                            </Link>
                            <Link href={'/pwd'}>
                                <span className={styles.link}>비밀번호 변경</span>
                            </Link>
                        </div>

                        {/* Division Line */}
                        <DivisionLine text={'소셜 로그인'}/>

                        {/* Social Login */}
                        {/* TODO - 프로바이더 네이버 & 트위터로 변경 */}
                        <div className={styles['login-social']}>
                            <SocialLoginButton
                                provider='github'
                                src={github}
                                alt='Login for Github'
                            />
                            <SocialLoginButton
                                provider='google'
                                src={google}
                                alt='Login for Google'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export {LoginComponent};