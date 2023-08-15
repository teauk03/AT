"use client";
import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import NavigationLogo from "../../../../public/img/home-bg-Transparent.png";
import Link from "next/link";


const FooterClientComponent = () => {
    return (
        <div className={styles['footer-container']}>
            <footer className={styles.footer}>
                <section className={styles['footer-main']}>
                    <Link href={'/'}>
                        <Image src={NavigationLogo} width={320.79} height={17.8} alt="어택 로고 이미지"/>
                    </Link>
                </section>

                <nav className={styles['footer-navigate']}>
                    <div className={styles['footer-navigate-item']}>
                        <h5>고객서비스</h5>
                        <p>기기대여</p>
                        <p>매장위치</p>
                        <p>커뮤니티</p>
                    </div>
                    <div className={styles['footer-navigate-item']}>
                        <h5>고객지원</h5>
                        <p>고객지원</p>
                        <p>대여안내</p>
                        <p>상담 봇</p>
                    </div>
                    <div className={styles['footer-navigate-item']}>
                        <h5>회사소개</h5>
                        <p>기업정보</p>
                        <p>공지사항</p>
                        <p>이벤트</p>
                    </div>
                    <div className={styles['footer-navigate-item']}>
                        <h5>SNS</h5>
                        <p>Twitter</p>
                    </div>
                </nav>
            </footer>

            {/* Site Legal */}
            <div className={styles.Legal}>
                <address className={styles.relation}>
                    <p className={styles.text}>
                        대표: 김00&nbsp;
                        사업자등록번호: 123-45-67890&nbsp;
                        주소: 어택<br/>
                        TEL: 010-0000-0000&nbsp;
                        E-mail: da12@attack.com
                    </p>
                    <small>Copyright © Attack. All Rights Reserved.</small>
                </address>
            </div>
        </div>
    );
}

export {FooterClientComponent}