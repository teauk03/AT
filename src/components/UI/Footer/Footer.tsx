"use client";
import React from 'react';
import styles from './Footer.module.scss';


/* TODO : Index 페이지 디자인시 footer-container 삭제 후
*   container 클래스에 적용 */
const FooterClientComponent = () => {
    return (
        <div className={styles['footer-container']}>
            <footer className={styles.footer}>
                <section className={styles['footer-main']}>
                    Attack
                </section>
                <nav className={styles['footer-navigate']}>
                    <div className={styles['nav-item']}>
                        <h5>Marketplace</h5>
                        <p>Home</p>
                        <p>Activity</p>
                        <p>Discover</p>
                        <p>Learn more</p>
                    </div>
                    <div className={styles['nav-item']}>
                        <h5>Company</h5>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Portfolio</p>
                    </div>
                    <div className={styles['nav-item']}>
                        <h5>Contact</h5>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Email</p>
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