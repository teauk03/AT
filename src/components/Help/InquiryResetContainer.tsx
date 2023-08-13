'use client'
import axios from "axios";
import React, {FormEvent, useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';

const InquiryResetContainer = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const searchParams = useSearchParams();
    const token = searchParams!.get('token');
    const tokenValue = token || '';


    useEffect(() => {
        if (!token) {
            setError('토큰이 올바르지 않습니다.');
        }
    }, [token]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            /* 서버에 대한 요청을 구성합니다. */
            const response = await axios.post('/api/user/inquiryResetPwd', {
                /* 토큰을 어떻게 관리하는지에 따라 수정 필요 */
                token: token,
                newPassword: password,
            });

            if (response.data.success) {
                /* 성공 시 로직 : 로그인 페이지로 리디렉션하거나 메시지를 표시 */
            } else {
                setError('비밀번호 재설정에 실패하였습니다.');
            }
        } catch (err) {
            /* 오류 처리 로직 */
            setError('비밀번호 재설정 중 오류가 발생했습니다. 다시 시도해 주세요.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="token">토큰 입력:</label>
                <input
                    type="text"
                    id="token"
                    value={tokenValue}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호 입력:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">비밀번호 재확인:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">비밀번호 재설정</button>
        </form>
    );
};

export default InquiryResetContainer;