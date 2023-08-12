'use client'
import React from 'react';
import styles from "@/components/Help/Support/ContactUs/contactus.module.scss";
import useNavigation from "@/hooks/useNavigationGoBack";
import AppLink from "@/components/UI/Link/AppLink";



const ContactUsButton = ( ) => {
    /* 뒤로가기 커스텀 훅 */
    const { handleGoBack } = useNavigation();

    return (
        <>
            <button className={styles['submit-btn-delete']} onClick={handleGoBack}>
                취소
            </button>
            <AppLink
                className={styles['submit-btn-add']}
                href={'/support/write'}
                label={'동의합니다.'}
            />
        </>
    );
};

export default ContactUsButton;