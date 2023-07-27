"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FooterClientComponent = () => {
    return (
        <footer className={styles.page}>
            <section className={styles.service}>
                {/* Service1 */}
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Menu1</h3>
                    <ul className={styles.menu}>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                    </ul>
                </div>

                {/* Service2 */}
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Menu2</h3>
                    <ul className={styles.menu}>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                    </ul>
                </div>

                {/* Service3 */}
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Menu3</h3>
                    <ul className={styles.menu}>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/">Go</Link>
                        </li>
                    </ul>
                </div>

                {/* SNS Link */}
                <div className={styles.wrapper}>
                    <div className={styles.columns}>
                        <h3 className={styles.title}>SNS</h3>
                        <ul className={styles.menu}>
                            <li className={styles.item}>
                                <Link className={styles['sns-link']} href="/">
                                    <FontAwesomeIcon className={styles.icon} icon={faFacebook}/>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles['sns-link']} href="/">
                                    <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles['sns-link']} href="/">
                                    <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Site Legal */}
            <address className={styles.relation}>
                <p className={styles.text}>
                    대표: 박장환&nbsp;
                    사업자등록번호: 123-45-67890&nbsp;
                    주소: 안산대학교<br/>
                    TEL: 010-8338-9751&nbsp;
                    E-mail: da12@da.com
                </p>
                <small>Copyright © DA. All Rights Reserved.</small>
            </address>
        </footer>
    );
}

export {FooterClientComponent}