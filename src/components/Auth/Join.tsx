'use client'
import React, {FC, useEffect} from 'react';
import Link from "next/link";
import { years, months, days } from "@/app/utils/date";

import { useForm } from '@/app/hooks/Form/useForm';
import { useSignUp } from '@/app/hooks/useSignUp';

import {EmailField} from '@/components/FormElements/EmailField';
import {PasswordField} from '@/components/FormElements/PasswordField';
import {NameField} from '@/components/FormElements/NameField';
import {DateOfBirthField} from '@/components/FormElements/DateOfBirthField';

import github from "/public/github.svg"
import google from "/public/google.svg"
import SocialLoginButton from "../Button/SocialLoginButtons";
import styles from './Join.module.scss';

/**
 * JoinComponent 는 사용자의 회원 가입 폼을 제공하는 컴포넌트입니다.
 *
 * 이 컴포넌트에서는 useForm, useSignup 두 가지 hook을 사용하여,
 * 폼 필드의 상태 관리와 회원 가입 로직을 처리합니다.
 *
 * 회원 가입이 성공적으로 완료되면(signedUp 상태가 true가 되면),
 * 사용자를 홈페이지('/')로 리다이렉트합니다.
 */
const JoinComponent: FC = (): JSX.Element => {
    const {
        year, month, day,
        email, password, name,
        emailValid, passwordValid,
        handleYearChange, handleMonthChange, handleDayChange,
        handleEmailChange, handlePasswordChange, handleNameChange,
        validateForm
    } = useForm();

    const { signup, loading, error, signedUp } = useSignUp();

    useEffect(()=>{
        if (signedUp) window.location.href = "/";
    },[signedUp])

    const handleSubmit = async (e: any):Promise<void> => {
        e.preventDefault();
        const missingField: string | null = validateForm();
        if (missingField) {
            alert(`${missingField}을(를) 입력해주세요.`);
        }

        const data = { year, month, day, name, email, password };
        await signup(data)
        if (error) {
            alert(error + '로 인해 회원가입에 실패했습니다.');
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}></div>
                <div className={styles.contents}>
                    <header className={styles.header}>
                        <h1>Create your account</h1>
                        <span>
                            {'Have an account?'}{' '}
                            <Link href={'/login'}>Login now</Link>
                        </span>
                    </header>
                    <div className={styles.formSocial}>
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
                    <form
                        className={styles.form}
                        method="POST"
                        action="/api/auth/signup"
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
        </>
    );
};

export { JoinComponent };