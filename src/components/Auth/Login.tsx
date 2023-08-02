'use client'
import React from "react";
import styles from "./Login.module.scss";

import Link from "next/link";
import github from "/public/github.svg"
import google from "/public/google.svg"

import SocialLoginButton from "../Button/SocialLogin/SocialLoginButtons";
import PrimaryButton from "@/components/Button/PrimaryButton";
import PrimaryCheckBox from "@/components/CheckBox/PrimaryCheckBox";
import InputBox from "@/components/Auth/Input/InputBox";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";
import useLogin from "@/hooks/useSignIn";
import handleLoginSubmit from "@/utils/auth/handleLoginSubmit";

const LoginComponent = (): JSX.Element => {
    const {
        error,
        isLoading,
    } = useLogin();

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        await handleLoginSubmit(event, handleAsyncTask);
    }

    return (
        // Container
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.login}>
                    {/* Logo */}
                    <h1 className={styles['login-logo']}>
                        Welcome to Our Application
                    </h1>
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        {/* E-mail Input & Error */}
                        <InputBox
                            name={'email'}
                            type={'email'}
                            label={'이메일을 입력하세요.'}
                            autoComplete={'current-email'}
                        />

                        {/* Password Input & Error */}
                        <InputBox
                            name={'password'}
                            type={'password'}
                            label={'비밀번호를 입력하세요.'}
                            autoComplete={'current-password'}
                        />

                        {/* Error */}
                        {error &&
                            <div className={styles['input-error']}>
                                <span className={styles['error-text']}>
                                    {error.message}
                                </span>
                            </div>
                        }

                        {/* Remember Password & Check bok */}
                        <PrimaryCheckBox/>

                        {/* Login Button */}
                        <PrimaryButton
                            disabled={isLoading}
                            label={'로그인'}
                        />

                        {/* Division Line */}
                        <DivisionLine text={'소셜 로그인'}/>

                        {/* Social Login */}
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

                    {/* New Account */}
                    <div className={styles['create-account']}>
                        {"계정이 없으신가요?"}{' '}
                        <span className={styles.link}>
                            <Link href={'/join'}>회원가입</Link>
                        </span>
                    </div>

                    {/* Find Account */}
                    <div className={styles['find-account']}>
                        {"계정을 분실하셨나요 ?"}{' '}
                        <span className={styles.link}>
                            <Link href={'/id'}>
                                아이디 찾기
                            </Link>
                        </span>{' 또는 '}
                        <span className={styles.link}>
                            <Link href={'/pwd'}>
                                비밀번호 변경
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export {LoginComponent};