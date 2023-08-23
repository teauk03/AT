'use client'
import React, {FC} from 'react';
import styles from './Join.module.scss';

import {useSignUp} from '@/hooks/Auth/useSignUp';
import {isValidEmailFormat, hasValidName, hasValidPasswordLength, hasBirthValid, hasValidNickName, hasValidPhone} from "@/utils/validation/validation";

import AuthInputField from "@/components/Auth/Input/AuthInputField";
import PrimaryButton from "@/components/UI/Button/PrimaryButton";
import useValueField from "@/hooks/Validation/useSignUpValueField";
import AppLink from "@/components/UI/Link/AppLink";
import {UI_JOIN_INPUT_FIELD} from "@/types/UI";
import Link from "next/link";
import Image from "next/image";
import NavigationLogo from "../../../public/img/home-bg-Transparent.png";

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
        signupFetching, isLoading, error, signedUp
    } = useSignUp();
    console.log('JoinComponent : ', error)
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

    /* 이름, 생년월일, 휴대폰번호, 이메일, 비밀번호, 닉네임 필드 */
    const FIRST_INPUT_FIELDS: UI_JOIN_INPUT_FIELD[] = [
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
        },
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
        }
    ];

    const handleSubmitStep = async (e: any): Promise<void> => {
        e.preventDefault();
        const data = {
            name, email, password, nickname, phone, birth
        };
        await signupFetching(data);
    };

    return (
        <main className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.join}>
                    <section className={styles['title-wrapper']}>
                        {/* Logo */}
                        <div className={styles.logo}>
                            <Link href={'/'}>
                                <Image
                                    className={styles['home-logo']}
                                    src={NavigationLogo}
                                    width={200.79}
                                    height={17}
                                    alt="어택 로고 이미지"
                                />
                            </Link>
                        </div>
                        <div className={styles['link-wrapper']}>
                            <span className={styles['sub-text']}>
                                {'계정이 이미 있으신가요?'}{' '}
                            </span>
                            <AppLink href={'/login'} label={'로그인'}/>
                        </div>
                    </section>
                    <form className={styles.form} onSubmit={handleSubmitStep} noValidate>
                        {FIRST_INPUT_FIELDS.map((field, index) => (
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
                            </div>
                        ))}
                        <PrimaryButton disabled={isLoading} label={'회원가입'}/>
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};