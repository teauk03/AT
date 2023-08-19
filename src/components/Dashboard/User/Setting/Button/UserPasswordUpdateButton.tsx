'use client'
import React, {ChangeEvent, useState} from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import {CustomSession} from "@/types/next-auth";
import InputBox from "@/components/UI/Input/InputBox";

// Todo 비밀번호 해싱하여 전달
const UserPasswordUpdateButton: React.FC<CustomSession> = ({user}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

    const onChangeCurrentPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value)
    }
    const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value)
    }
    const onChangeNewPasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPasswordConfirm(e.target.value)
    }

    const putChangePasswordSubmit = async () => {
        /* 비밀번호 변경 요청을 서버로 전송 */
        const response = await  fetch('/api/setting/changePassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: user._id,
                currentPassword: currentPassword,
                newPassword: newPassword,
                newPasswordConfirm: newPasswordConfirm
            })
        })
        /* 서버 응답 */
        const request = await response.json();
    }

    return (
        <>
            <section>
                <InputBox
                    name={'password'}
                    type={'password'}
                    label={'비밀번호를 입력하세요.'}
                    value={currentPassword}
                    autoComplete={'current-password'}
                    onChange={onChangeCurrentPassword}
                />
                <InputBox
                    name={'password'}
                    type={'password'}
                    label={'새로운 비밀번호를 입력하세요.'}
                    value={newPassword}
                    autoComplete={'current-password'}
                    onChange={onChangeNewPassword}
                />
                <InputBox
                    name={'password'}
                    type={'password'}
                    label={'새로운 비밀번호를 다시 입력하세요.'}
                    value={newPasswordConfirm}
                    autoComplete={'current-password'}
                    onChange={onChangeNewPasswordConfirm}
                />
            </section>
            <button className={styles['account-form-btn']} onClick={putChangePasswordSubmit}>
                변경하기
            </button>
        </>
    );
};

export default UserPasswordUpdateButton;