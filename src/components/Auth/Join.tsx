'use client'

import React, {FC, useEffect} from 'react';
import Link from "next/link";
import {years, months, days} from "@/utils/date";

import {useSignUp} from '@/hooks/useSignUp';
import {EmailField} from '@/components/Auth/FormElements/EmailField';
import {PasswordField} from '@/components/Auth/FormElements/PasswordField';
import {NameField} from '@/components/Auth/FormElements/NameField';
import {DateOfBirthField} from '@/components/Auth/FormElements/DateOfBirthField';

import github from "/public/github.svg"
import google from "/public/google.svg"
import SocialLoginButton from "../Button/SocialLogin/SocialLoginButtons";
import styles from './Join.module.scss';
import {isValidEmail, hasValidName, hasValidPasswordLength} from "@/utils/validation";
import useEmailField from "@/hooks/Form/useEmailField";
import usePasswordField from "@/hooks/Form/usePasswordField";
import useNameField from "@/hooks/Form/useNameField";
import useDateOfBirthField from "@/hooks/Form/useDateOfBirthField";

/**
 * JoinComponent 는 사용자의 회원 가입을 제공하는 컴포넌트입니다.
 *
 * useForm, useSignup Custom Hook을 사용해,
 * 폼 필드의 상태 관리와 회원 가입 로직을 처리합니다.
 *
 * 회원 가입이 성공적으로 완료되면(signedUp 상태가 true가 되면),
 * 사용자를 홈페이지('/')로 리다이렉트합니다.
 */
const JoinComponent: FC = (): JSX.Element => {

    const {signup, loading, error, signedUp} = useSignUp();
    const {email, emailValid, handleEmailChange} = useEmailField("", isValidEmail);
    const {password, passwordValid, handlePasswordChange} = usePasswordField("", hasValidPasswordLength);
    const {name, handleNameChange} = useNameField("", hasValidName);
    const {year, month, day, handleYearChange, handleMonthChange, handleDayChange} = useDateOfBirthField("", "", "");


    useEffect(() => {
        if (signedUp) window.location.href = "/";
    }, [signedUp])

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        const data = {year, month, day, name, email, password};
        await signup(data)
        if (error) alert(error + '로 인해 회원가입에 실패했습니다.');
    };

    return (
        <main className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.join}>
                    {/* Header */}
                    <section className={styles['title-wrapper']}>
                        <h1 className={styles.title}>Create Account</h1>
                        <div className={styles['link-wrapper']}>
                            <span className={styles['sub-text']}>
                                {'계정이 이미 있으신가요?'}{' '}
                            </span>
                            <Link href={'/login'}>로그인</Link>
                        </div>
                    </section>

                    {/* Social */}
                    <section className={styles['social-wrapper']}>
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
                    </section>


                    {/* Division Line */}
                    <div className={styles['division-line']}>
                        <span className={styles['line-text']}>이메일로 가입하기</span>
                    </div>


                    {/* Sign Up */}
                    <form
                        className={styles.form}
                        method="POST"
                        action="/api/auth/register/register.ts"
                        onSubmit={handleSubmit}
                    >
                        <EmailField
                            email={email}
                            emailValid={emailValid}
                            handleEmailChange={handleEmailChange}
                        />
                        <PasswordField
                            password={password}
                            passwordValid={passwordValid}
                            handlePasswordChange={handlePasswordChange}
                        />
                        <NameField
                            name={name}
                            handleNameChange={handleNameChange}
                        />
                        <DateOfBirthField
                            year={year} month={month} day={day}
                            years={years} months={months} days={days}
                            handleYearChange={handleYearChange}
                            handleMonthChange={handleMonthChange}
                            handleDayChange={handleDayChange}
                        />
                        <button className={styles['submit-btn']} type="submit">회원가입</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};