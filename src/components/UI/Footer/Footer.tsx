import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import NavigationLogo from "../../../../public/img/home-bg-Transparent.png";
import Link from "next/link";
import DATA from '@/data/data-footer-items.json';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles['ftr-sec']}>
                <div className={styles['ftr-top']}>
                    <div className={styles['ftr-link']}>
                        <Link href={'/'}>
                            <Image src={NavigationLogo} width={320.79} height={17.8} alt="어택 로고 이미지"/>
                        </Link>
                    </div>

                    <nav className={styles['ftr-nav']}>
                        {DATA.FOOTER.map((section, index) => (
                            <div key={index} className={styles['ftr-item']}>
                                <h5>{section.title}</h5>
                                {section.link.map((link, linkIndex) => (
                                    link.href.includes('twitter.com')
                                        ? <a key={linkIndex} target="_blank" href={link.href}>{link.link_title}</a>
                                        : <Link key={linkIndex} href={link.href}>{link.link_title}</Link>
                                ))}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Site Legal */}
                <div className={styles['ftr-Legal']}>
                    <address className={styles.relation}>
                        <p className={styles.text}>
                            대표: 김00&nbsp;
                            사업자등록번호: 123-45-67890&nbsp;
                            주소: 경기도 부천시 부일로459번길 20 센텀시티 2층<br/>
                            TEL: 010-0000-0000&nbsp;
                            E-mail: da12@attack.com
                        </p>
                        <small>Copyright © Attack. All Rights Reserved.</small>
                    </address>
                </div>
            </section>
        </footer>
    );
}

export default Footer;