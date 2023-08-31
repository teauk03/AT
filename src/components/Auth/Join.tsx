'use client'
import React, {FC, useState} from 'react';
import styles from './Join.module.scss';

import {
    isValidEmailFormat,
    hasValidName,
    hasBirthValid,
    hasValidNickName,
    hasValidPhone,
    hasMinLength
} from "@/utils/validation/validation";

import AuthButton from "@/components/UI/Button/Auth/AuthButton";
import useValueField from "@/hooks/Validation/useSignUpValueField";
import Link from "next/link";
import Image from "next/image";
import NavigationLogo from "../../../public/img/home-bg-Transparent.png";
import useRequest from "@/hooks/Fetch/useRequest";
import {useRouter} from "next/navigation";
import {UI_JOIN_INPUT_FIELD} from "@/types/UI";
import {FaBirthdayCake, FaKey} from "react-icons/fa";
import {BiSolidUser} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import {BsPhoneFill} from "react-icons/bs";

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
        value: email,
        isValueValid: isEmailValid,
        handleChange: handleEmailChange
    } = useValueField("", isValidEmailFormat, "이메일은 at@at.com 형식입니다.");
    const {
        value: password,
        isValueValid: isPasswordValid,
        handleChange: handlePasswordChange
    } = useValueField("", (password: string) => hasMinLength(password, 2), "비밀번호는 최소 2자 이상이어야 합니다.");
    const {
        value: name,
        isValueValid: isNameValid,
        handleChange: handleNameChange
    } = useValueField("", hasValidName, "이름은 최소 2자 이상이어야 합니다.");
    const {
        value: birth,
        isValueValid: isBirthValid,
        handleChange: handleBirthChange
    } = useValueField("", hasBirthValid, "생년월일은 숫자만 입력 가능합니다.");
    const {
        value: nickname,
        isValueValid: isNickNameValid,
        handleChange: handleNickNameChange
    } = useValueField("", hasValidNickName, "닉네임은 최소 2자 이상이어야 합니다.");
    const {
        value: phone,
        isValueValid: isPhoneValid,
        handleChange: handlePhoneChange
    } = useValueField("", hasValidPhone, "휴대폰 번호는 최소 2자 이상이어야 합니다.");


    /* 이름, 생년월일, 휴대폰번호, 이메일, 비밀번호, 닉네임 필드 */
    const FIRST_INPUT_FIELDS: UI_JOIN_INPUT_FIELD[] = [
        {
            label: '이메일',
            type: 'email',
            placeholder: '이메일 (Email)',
            icon: <AiOutlineMail/>,
            value: email,
            validation: isEmailValid,
            handleChange: handleEmailChange,
            validInputResult: '사용 가능한 이메일 입니다.',
        },
        {
            label: '비밀번호',
            type: 'password',
            placeholder: '비밀번호',
            icon: <FaKey/>,
            value: password,
            validation: isPasswordValid,
            handleChange: handlePasswordChange,
            validInputResult: '사용 가능한 비밀번호입니다.',
        },
        {
            label: '닉네임',
            type: 'text',
            placeholder: '닉네임',
            icon: <BiSolidUser/>,
            value: nickname,
            validation: isNickNameValid,
            handleChange: handleNickNameChange,
            validInputResult: '사용 가능한 닉네임 입니다.',
        },
        {
            label: '이름',
            type: 'text',
            placeholder: '이름',
            icon: <BiSolidUser/>,
            value: name,
            validation: isNameValid,
            handleChange: handleNameChange,
            validInputResult: '사용 가능한 이름 입니다.'
        },
        {
            label: '생년월일',
            type: 'text',
            placeholder: '생년월일',
            icon: <FaBirthdayCake/>,
            value: birth,
            validation: isBirthValid,
            handleChange: handleBirthChange,
            validInputResult: '사용 가능한 생년월일 입니다.'
        },
        {
            label: '휴대폰번호',
            type: 'number',
            placeholder: '전화번호',
            icon: <BsPhoneFill/>,
            value: phone,
            validation: isPhoneValid,
            handleChange: handlePhoneChange,
            validInputResult: '사용 가능한 전화번호 입니다.',
        }
    ];

    /* 서버와 통신 */
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const signupFetching = useRequest({
        url: '/api/auth/register',
        method: 'POST',
        body: {name, email, password, nickname, phone, birth},
        onSuccess: (data, e) => {
            alert('회원가입이 완료되었습니다.')
            router.push('/');
        },
        onFailure: (error) => setError(error.message || '회원 가입에 실패했습니다.')
    });

    const handleSubmitStep = async (e: any): Promise<void> => {
        e.preventDefault();
        await signupFetching(e);
    };

    /* 인풋박스 포커스시 테두리 상태관리 */
    const [
        isFocusInput,
        setIsFocusInput
    ] = useState<Record<string, boolean>>({}); // 초기 상태를 빈 객체로 설정
    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>, inputName: string) => {
        const isFocused = event.type === 'focus';
        setIsFocusInput({
            ...isFocusInput,
            [inputName]: isFocused
        });
    }

    return (
        <main className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.join}>
                    <section className={styles.logoSection}>
                        {/* Logo */}
                        <div className={styles.logo}>
                            <Link href={'/'}>
                                <Image
                                    src={NavigationLogo}
                                    width={200.79}
                                    height={17}
                                    alt="어택 로고 이미지"
                                />
                            </Link>
                        </div>
                    </section>

                    <form className={styles.form} onSubmit={handleSubmitStep} noValidate>
                        <fieldset className={styles.formFieldset}>
                            {FIRST_INPUT_FIELDS.map((field, index) => (
                                <div className={styles.inputInner} key={index}>
                                    {/* 정보 입력 필드 */}
                                    <div
                                        className={styles.inputItem}
                                        style={{borderColor: isFocusInput[field.label.toLowerCase()] ? '#0077ff' : '#9fa1a7'}}
                                    >
                                        <label htmlFor={`${field.label}Form`} className={styles.inputLabel}>
                                            {field.icon}
                                        </label>
                                        <input
                                            className={styles.inputText}
                                            name={field.label.toLowerCase()}
                                            value={field.value}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            autoComplete={'on'}
                                            onChange={field.handleChange}
                                            onFocus={(e) => handleInputFocus(e, field.label.toLowerCase())}
                                            onBlur={(e) => handleInputFocus(e, field.label.toLowerCase())}
                                        />
                                    </div>

                                    {/* 에러 메시지 출력 */}
                                    {field.label.toLowerCase() && (
                                        <div style={{
                                            marginTop: '.2rem',
                                            color: field.validation ? '#4FC3F7' : '#FF0000',
                                            fontSize: '12px'
                                        }}>
                                            {field.validation ? field.validInputResult : error ? `${field.placeholder} : ${error.replace(/\"/g, "")}` : ""}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </fieldset>
                        <AuthButton label={'회원가입'}/>
                    </form>
                </div>
            </div>
        </main>
    );
};

export {JoinComponent};