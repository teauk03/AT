'use client'
import React, {FC, useState} from 'react';
import styles from './Join.module.scss';
import Link from "next/link";
import github from "/public/github.svg"
import google from "/public/google.svg"

import {useSignUp} from '@/hooks/Auth/useSignUp';
import {
    isValidEmailFormat,
    hasValidName,
    hasValidPasswordLength,
    hasBirthValid,
    hasValidNickName, hasValidPhone
} from "@/utils/validation/validation";

import SocialLoginButton from "@/components/UI/Button/SocialLogin/SocialLoginButtons";
import useEmailField from "@/hooks/Validation/useEmailField";
import usePasswordField from "@/hooks/Validation/usePasswordField";
import useNameField from "@/hooks/Validation/useNameField";
import useDateOfBirthField from "@/hooks/Validation/useDateOfBirthField";
import AuthInputField from "@/components/Auth/Input/AuthInputField";
import PrimaryButton from "@/components/UI/Button/PrimaryButton";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";
import useValueField from "@/hooks/Validation/useSignUpValueField";

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
    const {email, isEmailValid, handleEmailChange} = useEmailField("", isValidEmailFormat);
    const {password, isPasswordValid, handlePasswordChange} = usePasswordField("", hasValidPasswordLength);
    const {name, isNameValid, handleNameChange} = useNameField("", hasValidName);
    const {birth, isBirthValid, handleBirthChange} = useDateOfBirthField("", hasBirthValid);
    const {
        value: nickname,
        isValueValid: isNickNameValid,
        handleChange: handleNickNameChange
    } = useValueField("", hasValidNickName);
    const {
        value: phone,
        isValueValid: isPhoneValid,
        handleChange: handlePhoneChange
    } = useValueField("", hasValidPhone);

    /* 이메일, 비밀번호, 닉네임 유효성 검사 */
    const [step, setStep] = useState(1);
    const [step1Error, setStep1Error] = useState<string | null>(null);
    const handleSubmitStep1 = (e: any): void => {
        e.preventDefault();
        setStep1Error(null); // 이전 에러 상태를 초기화

        if (isEmailValid && isPasswordValid && isNickNameValid) {
            setStep(2); // 유효성 검사가 통과되면 다음 단계로 이동
        } else {
            setStep1Error('입력한 정보를 다시 확인해 주세요.'); // 에러 상태 설정
        }
    };


    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        const data = {name, email, password, nickname, phone, birth};
        await signup(data)
    };

    return (
        <main className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.join}>
                    {/* Header */}
                    <section className={styles['title-wrapper']}>
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
                    <form className={styles.form} onSubmit={step === 1 ? handleSubmitStep1 : handleSubmit} noValidate>
                        {step === 1 && (
                            <>
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
                                    label={'닉네임'}
                                    htmlFor={'nameForm'}
                                    name={'nickname'}
                                    value={nickname}
                                    type={'text'}
                                    placeholder={'Name (닉네임)'}
                                    autoComplete={'off'}
                                    onChange={handleNickNameChange}
                                    isInputValidation={isNickNameValid}
                                    validInputResult='사용 가능한 닉네임 입니다.'
                                    invalidInputResult={error}
                                />
                                <PrimaryButton
                                    disabled={isLoading || !(isEmailValid && isPasswordValid && isNickNameValid)}
                                    label={'다음'}
                                />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <AuthInputField
                                    label={'이름'}
                                    htmlFor={'nameForm'}
                                    name={'name'}
                                    value={name}
                                    type={'text'}
                                    placeholder={'이름'}
                                    autoComplete={'off'}
                                    onChange={handleNameChange}
                                    isInputValidation={isNameValid}
                                    validInputResult=''
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
                                <AuthInputField
                                    label={''}
                                    htmlFor={'nameForm'}
                                    name={'phone'}
                                    value={phone}
                                    type={'text'}
                                    placeholder={'휴대전화번호'}
                                    autoComplete={'off'}
                                    onChange={handlePhoneChange}
                                    isInputValidation={isPhoneValid}
                                    validInputResult=''
                                    invalidInputResult={error}
                                />

                                <PrimaryButton
                                    disabled={isLoading}
                                    label={'회원가입'}
                                />
                            </>
                        )}
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};