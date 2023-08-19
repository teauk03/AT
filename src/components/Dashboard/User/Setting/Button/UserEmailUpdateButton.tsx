'use client'
import React, {ChangeEvent, useState} from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import {CustomSession} from "@/types/next-auth";
import InputBox from "@/components/UI/Input/InputBox";

const UserEmailUpdateButton: React.FC<CustomSession> = ({user}) => {
    const [userEmail, setUserEmail] = useState(user ? user.email : '');

    const onChangeSetUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const putChangeEmailSubmit = async () => {
        const response = await fetch('/api/setting/changeEmail', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: user._id,
                email: userEmail,
            })
        });
        const request = await response.json()
    }

    return (
        <>
            <section>
                <InputBox
                    name={'email'}
                    type={'email'}
                    label={'새로운 이메일을 입력하세요.'}
                    autoComplete={'current-password'}
                    value={userEmail}
                    onChange={onChangeSetUserEmail}
                />
                <InputBox
                    name={'password'}
                    type={'password'}
                    label={'비밀번호를 입력하세요. (이메일 인증으로 변경 예정)'}
                    autoComplete={'current-password'}
                />
            </section>
            <button className={styles['account-form-btn']} onClick={putChangeEmailSubmit}>
                변경하기
            </button>
        </>
    );
};

export default UserEmailUpdateButton;