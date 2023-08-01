'use client'

import React, {FC, useEffect} from 'react';
import styles from './Join.module.scss';
import Link from "next/link";
import github from "/public/github.svg"
import google from "/public/google.svg"

import {useRouter} from "next/navigation";
import {useSignUp} from '@/hooks/useSignUp';
import {isValidEmail, hasValidName, hasValidPasswordLength, hasBirthValid} from "@/utils/validation";

import SocialLoginButton from "../Button/SocialLogin/SocialLoginButtons";
import useEmailField from "@/hooks/Form/useEmailField";
import usePasswordField from "@/hooks/Form/usePasswordField";
import useNameField from "@/hooks/Form/useNameField";
import useDateOfBirthField from "@/hooks/Form/useDateOfBirthField";
import AuthInputField from "@/components/Auth/FormElements/AuthInputField";
import PrimaryButton from "@/components/Button/PrimaryButton";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";

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
    const {signup, isLoading, error, signedUp} = useSignUp();
    const {email, isEmailValid, handleEmailChange} = useEmailField("", isValidEmail);
    const {password, isPasswordValid, handlePasswordChange} = usePasswordField("", hasValidPasswordLength);
    const {name, isNameValid, handleNameChange} = useNameField("", hasValidName);
    const {birth, isBirthValid, handleBirthChange} = useDateOfBirthField("", hasBirthValid);

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        const data = {birth, name, email, password};
        await signup(data)
        console.log(data)
        console.log(error)
        //if (error) alert(error);
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
                    <DivisionLine text={'이메일로 가입하기'}/>

                    {/* Sign Up */}
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <AuthInputField
                            label={'Email'}
                            htmlFor={'emailForm'}
                            name={'email'}
                            value={email}
                            type={'email'}
                            placeholder={'이메일 (Email)'}
                            autoComplete={'on'}
                            onChange={handleEmailChange}
                            isInputValidation={isEmailValid}
                            validInputResult='사용 가능한 이메일 입니다.'
                            invalidInputResult={error}
                        />
                        <AuthInputField
                            label={'Password'}
                            htmlFor={'passwordForm'}
                            name={'password'}
                            value={password}
                            type={'password'}
                            placeholder={'비밀번호'}
                            autoComplete={'on'}
                            onChange={handlePasswordChange}
                            isInputValidation={isPasswordValid}
                            validInputResult='사용 가능한 비밀번호입니다.'
                            invalidInputResult={error}
                        />
                        <AuthInputField
                            label={'Name (닉네임)'}
                            htmlFor={'nameForm'}
                            name={'name'}
                            value={name}
                            type={'text'}
                            placeholder={'Name (닉네임)'}
                            autoComplete={'off'}
                            onChange={handleNameChange}
                            isInputValidation={isNameValid}
                            validInputResult='사용 가능한 닉네임 입니다.'
                            invalidInputResult={error}
                        />

                        <AuthInputField
                            label={'생년월일'}
                            htmlFor={'birthForm'}
                            name={'birth'}
                            value={birth}
                            type={'text'}
                            placeholder={'생년월일 8자리 (예: 20230730)'}
                            autoComplete={'off'}
                            onChange={handleBirthChange}
                            isInputValidation={isBirthValid}
                            validInputResult='ok'
                            invalidInputResult={error}
                        />

                        <PrimaryButton
                            disabled={isLoading}
                            label={'회원가입'}
                        />
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};