import React from 'react';
import styles from "@/components/Help/Support/ContactUs/contactus.module.scss"
import ContactUsButton from "@/components/Help/Support/ContactUs/ContactUsButton";
import ContactUsCheckBox from "@/components/Help/Support/ContactUs/ContactUsCheckBox";
import SUPPORT_CONTACTUS from "@/data/Support/data-support-policy.json";

const ContactUs = () => {
    return (
        <main className={styles.container}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>개인 정보 정책</legend>
                <h1>문의 사항 및 개인 정보 수집 및 이용 동의</h1>
                <div className={styles['agree-wrapper']}>
                    {SUPPORT_CONTACTUS.ITEMS.map((article, index) => (
                        <article className={styles['article']} key={index}>
                            <b className={styles['article-title']}>{article.title}</b>
                            <p className={styles['article-text']}>
                                {article.description}
                                {index === 2 && <span><br/>{article.outer}</span>}
                                {index === 6 && <span><br/>{article.outer} : {article.inner}</span>}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Check Box */}
                <div className={styles['checkbox-wrapper']}>
                    <ContactUsCheckBox/>
                </div>

                {/* 동의 & 취소 버튼 */}
                <div className={styles['wrap-btn']}>
                    <ContactUsButton/>
                </div>
            </fieldset>
        </main>
    );
};

export default ContactUs;