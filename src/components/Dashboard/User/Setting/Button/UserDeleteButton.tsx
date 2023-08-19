'use client'
import React from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import {signOut, useSession} from "next-auth/react";

const UserDeleteButton = () => {
    const {data: session} = useSession();

    const handleDeleteOne = async () => {
        if (session && session.user) {
            const response = await fetch('/api/user/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: session.user._id })
            });

            const result = await response.json();

            // 삭제가 성공하면 로그아웃
            if (response.ok && result.message === '회원탈퇴가 완료되었습니다.') {
                await signOut({redirect: false});
            }
        }
    }

    return (
        <button className={styles['account-form-btn']} onClick={handleDeleteOne}>
            회원탈퇴
        </button>
    );
};

export default UserDeleteButton;