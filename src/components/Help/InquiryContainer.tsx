'use client'
import axios from "axios";
import React, {useEffect, useState} from 'react';
import styles from './Inquiry.module.scss';
import InputBox from "@/components/UI/Input/InputBox";
import {usePathname} from "next/navigation";
import AppLink from "@/components/UI/Link/AppLink";
import {InquiryContainer} from '@/types/Help'
import handlerInquiryUserId from "@/pages/api/user/inquiryUserId";

const InquiryContainer: React.FC<InquiryContainer> = ({inquiryDescription, btnDescription}) => {
    const [message, setMessage] = useState<string | null>(null);
    const pathname = usePathname();
    const isActiveId = pathname === '/id';


    const handleSubmitInquiryUserId = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const birth = formData.get('birthdate') as string;

        try {
            const response = await axios.post('/api/user/inquiryUserId', { name, birth });
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


    return (
        <form className={styles.container} onSubmit={handleSubmitInquiryUserId}>
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
                <InputBox label={'이름'} name={'name'} type={'text'}/>
                {isActiveId &&
                    <InputBox label={'생년월일'} name={'birthdate'} type={'text'}/>
                }

                {/* Password : Email & Name & Birth Date*/}
                {!isActiveId && (
                    <>
                        <InputBox label={'이메일'} name={'email'} type={'email'}/>
                        <InputBox label={'생년월일'} name={'birthdate'} type={'text'}/>
                    </>
                )}

                <button className={styles.button}>
                    {btnDescription}
                </button>
            </fieldset>
        </form>
    );
};

export default InquiryContainer;