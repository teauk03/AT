'use client'
import React, {FC, useCallback, useEffect, useState} from 'react';
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
import AuthInputField from "@/components/Auth/Input/AuthInputField";
import PrimaryButton from "@/components/UI/Button/PrimaryButton";
import DivisionLine from "@/components/Auth/DivisionLine/DivisionLine";
import useValueField from "@/hooks/Validation/useSignUpValueField";
import VerificationButton from "@/components/Auth/VerificationButton";
import {InputField} from "@/types/Input";

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
    const {
        signup, isLoading,
        error, signedUp
    } = useSignUp();
    const {
        value: email,
        isValueValid: isEmailValid,
        handleChange: handleEmailChange
    } = useValueField("", isValidEmailFormat);
    const {
        value: password,
        isValueValid: isPasswordValid,
        handleChange: handlePasswordChange
    } = useValueField("", hasValidPasswordLength);
    const {
        value: name,
        isValueValid: isNameValid,
        handleChange: handleNameChange
    } = useValueField("", hasValidName);
    const {
        value: birth,
        isValueValid: isBirthValid,
        handleChange: handleBirthChange
    } = useValueField("", hasBirthValid);
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

    /* 현재 단계를 관리하는 state */
    const [
        step,
        setStep
    ] = useState(0);

    const [isEmailDuplicated, setEmailDuplicated] = useState(false);
    const [isNicknameDuplicated, setNicknameDuplicated] = useState(false);

    const handleVerification = useCallback(async () => {
        try {
            const response = await fetch("/api/check-duplicate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nickname, email }),
            });

            const result = await response.json();

            if (result.message === '이미 존재하는 닉네임입니다.') {
                setNicknameDuplicated(true);
            } else {
                setNicknameDuplicated(false);
            }

            if (result.message === '이미 존재하는 이메일입니다.') {
                setEmailDuplicated(true);
            } else {
                setEmailDuplicated(false);
            }
        } catch (error) {
            console.error("오류가 발생했습니다:", error);
        }
    }, [nickname, email]);

    useEffect(() => {
        if (isEmailValid) {
            handleVerification();
        }
    }, [email, isEmailValid, handleVerification]);

    useEffect(() => {
        if (isNickNameValid) {
            handleVerification();
        }
    }, [nickname, isNickNameValid, handleVerification]);

    const handlePhoneVerification = () => {
        // 휴대폰 인증 로직
    };

    /* 이름, 생년월일, 휴대폰번호 필드 */
    const FIRST_INPUT_FIELDS: InputField[] = [
        {
            label: '이름',
            type: 'text',
            placeholder: '이름',
            value: name,
            validation: isNameValid,
            handleChange: handleNameChange,
            validInputResult: '사용 가능한 이름 입니다.'
        },
        {
            label: '생년월일',
            type: 'text',
            placeholder: '생년월일',
            value: birth,
            validation: isBirthValid,
            handleChange: handleBirthChange,
            validInputResult: '사용 가능한 생년월일 입니다.'
        },
        {
            label: '휴대폰번호',
            type: 'number',
            placeholder: '전화번호',
            value: phone,
            validation: isPhoneValid,
            handleChange: handlePhoneChange,
            validInputResult: '사용 가능한 전화번호 입니다.',
            VerificationButton: { label: '인증', onClick: handlePhoneVerification }
        }
    ];
    /* 이메일, 비밀번호, 닉네임 필드 */
    const SECOND_INPUT_FIELDS: InputField[] = [
        {
            label: '이메일',
            type: 'email',
            placeholder: '이메일 (Email)',
            value: email,
            validation: isEmailValid,
            handleChange: handleEmailChange,
            validInputResult: '사용 가능한 이메일 입니다.',
        },
        {
            label: '비밀번호',
            type: 'password',
            placeholder: '비밀번호',
            value: password,
            validation: isPasswordValid,
            handleChange: handlePasswordChange,
            validInputResult: '사용 가능한 비밀번호입니다.',
        },
        {
            label: '닉네임',
            type: 'text',
            placeholder: '닉네임',
            value: nickname,
            validation: isNickNameValid,
            handleChange: handleNickNameChange,
            validInputResult: '사용 가능한 닉네임 입니다.',
        }
    ];

    const handleSubmitStep = async (e: any): Promise<void> => {
        e.preventDefault();
        if (step === 0) {
            setStep(1); // 첫번째 단계를 완료하면 두번째 단계로 이동
        } else {
            const data = { name, email, password, nickname, phone, birth };
            await signup(data); // 두번째 단계를 완료하면 회원가입 실행
        }
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
                    <form className={styles.form} onSubmit={handleSubmitStep} noValidate>
                        {(step === 0 ? FIRST_INPUT_FIELDS : SECOND_INPUT_FIELDS).map((field, index) => (
                            <div className={styles['info-input-wrapper']} key={index}>
                                <AuthInputField
                                    label={field.label}
                                    htmlFor={`${field.label}Form`}
                                    name={field.label.toLowerCase()}
                                    value={field.value}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    autoComplete={'on'}
                                    onChange={field.handleChange}
                                    isInputValidation={field.validation}
                                    validInputResult={field.validInputResult}
                                    invalidInputResult={error ? `${field.placeholder} : ${error}` : ""}
                                />
                                {field.VerificationButton && (
                                    <VerificationButton
                                        label={field.VerificationButton.label}
                                        disabled={true}
                                        onClick={field.VerificationButton.onClick}
                                    />
                                )}
                            </div>
                        ))}
                        <PrimaryButton disabled={isLoading} label={step === 0 ? '다음' : '회원가입'}/>
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};