'use client'
import React from "react";
import styles from "./Login.module.scss";

import Link from "next/link";
import Image from "next/image";
import img from '/public/image.svg';

import github from "/public/github.svg"
import google from "/public/google.svg"
import {useLogin} from "@/hooks/useSignIn";
import SocialLoginButton from "../Button/SocialLoginButtons";
import PrimaryButton from "@/components/Button/PrimaryButton";
import PrimaryCheckBox from "@/components/CheckBox/PrimaryCheckBox";

const LoginComponent = (): JSX.Element => {
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;

        try {
            await login(email, password);
        } catch (error) {
            console.error(error);
            alert(error + '로 인해 로그인에 실패했습니다.');
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <header className={styles.header}>
                        {/* Login Header */}
                        <div className={styles.wrapper}>
                            <h1>Welcome to Our Application</h1>
                            <span>
                                {"Don't have an account?"}{' '}
                                <Link href={'/join'}>Sign Up</Link>
                            </span>
                        </div>
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
                    </header>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles['form-content']}>
                            {/* E-mail Input */}
                            <div className={styles['form-item']}>
                                <label htmlFor="emailForm">Enter Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="emailForm"
                                    className={styles['input-box']}
                                />
                            </div>

                            {/* Password Input */}
                            <div className={styles['form-item']}>
                                <label htmlFor="passwordForm">Enter Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    id='passwordForm'
                                    className={styles['input-box']}
                                />
                            </div>

                            {/* Remember Password - Check bok */}
                            <PrimaryCheckBox />

                            {/* Login Button */}
                            <PrimaryButton/>
                        </div>
                    </form>
                </div>

                <div className={styles.right}>
                    <Image src={img} alt={'Login page screenshot'}/>
                </div>
            </div>
        </>
    )
}

export {LoginComponent};