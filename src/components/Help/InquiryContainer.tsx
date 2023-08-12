'use client'
import axios from "axios";
import React, {useState} from 'react';
import styles from './Inquiry.module.scss';
import InputBox from "@/components/UI/Input/InputBox";
import {usePathname, useRouter} from "next/navigation";
import AppLink from "@/components/UI/Link/AppLink";
import {InquiryContainer} from '@/types/Help'

const InquiryContainer: React.FC<InquiryContainer> = ({inquiryDescription, btnDescription}) => {
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();
    const isActiveId = pathname === '/id';


    /* 아이디 찾기 요청 처리 함수 */
    const handleSubmitInquiryUserId = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const birth = formData.get('birthdate') as string;

        try {
            const response = await axios.post('/api/user/inquiryUserId', {name, birth});
            setMessage(response.data.success + ' Email: ' + response.data.email);
            alert(response.data.success + ' Email: ' + response.data.email);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data?.error || 'An error occurred');
                alert(error.response?.data?.error || 'An error occurred');
            } else {
                setMessage('An error occurred');
                alert('An error occurred');
            }
        }
    };


    /* 비밀번호 초기화 요청 처리 함수 */
    const handleSubmitInquiryResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const birth = formData.get('birthdate') as string;

        try {
            const response = await axios.post('/api/user/inquiryUserPwd', {email, name, birth});
            setMessage(response.data.success);
            alert(response.data.success);
            /*router.push('/pwd/reset/');*/

            /* 사용자에게 토큰 받기 */
            const token = prompt("비밀번호 재설정을 위한 토큰을 입력해주세요.");

            if(token) {
                /* 토큰을 다음 페이지로 전달하거나 다른 로직에 사용 */
                router.push(`/pwd/reset/?token=${token}`);
            } else {
                alert("토큰이 제공되지 않았습니다. 다시 시도해주세요.");
            }
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data?.error || '에러 발생');
                alert(error.response?.data?.error || '에러 발생');
            } else {
                setMessage('에러 발생');
                alert('에러 발생');
            }
        }
    };


    return (
        <form
            className={styles.container}
            onSubmit={isActiveId ? handleSubmitInquiryUserId : handleSubmitInquiryResetPassword}
        >
            <div className={styles['link-container']}>
                <div className={styles['link-wrapper']}>
                    <div className={styles['link-inner']}>
                        <AppLink className={isActiveId ? styles.active : styles.inactive} href={'/id'}
                                 label={'아이디 찾기'}/>
                    </div>
                    <div className={styles['link-inner']}>
                        <AppLink className={isActiveId ? styles.inactive : styles.active} href={'/pwd'}
                                 label={'비밀번호 초기화'}/>
                    </div>
                </div>
            </div>

            <fieldset className={styles.contents}>
                <p>
                    회원정보에 등록한 이메일로<br/>
                    {inquiryDescription}
                </p>

                {/* ID : Name & Birth Date */}
                {isActiveId ? (
                    <>
                        <InputBox label={'이름'} name={'name'} type={'text'}/>
                        <InputBox label={'생년월일'} name={'birth'} type={'text'}/>
                    </>
                ) : (
                    <>
                        <InputBox label={'이메일'} name={'email'} type={'email'}/>
                        <InputBox label={'이름'} name={'name'} type={'text'}/>
                        <InputBox label={'생년월일'} name={'birth'} type={'text'}/>
                    </>
                )}

                {/* /pwd/reset */}
                <button className={styles.button}>
                    {btnDescription}
                </button>
            </fieldset>
        </form>
    );
};

export default InquiryContainer;