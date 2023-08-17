import React from 'react';
import styles from './support.module.scss';
import AppLink from "@/components/UI/Link/AppLink";
import {SupportSideBarProps} from "@/types/Help";
import SUPPORT_ASIDE from "@/data/Support/data-support-aside.json";


const SupportSideBar = ({session}: SupportSideBarProps) => {
    return (
        <aside className={styles['aside']}>
            <ul className={styles['aside-menu']}>
                <h1>고객 지원</h1>
                {SUPPORT_ASIDE.ITEMS.map((item, index) => (
                    (index !== 6 || session) && (
                        <li key={index} className={styles['aside-menu-item']}>
                            <AppLink href={item.route} label={item.label} />
                        </li>
                    )
                ))}
                <li className={styles['aside-menu-item']}>
                    <AppLink
                        className={styles['contactus-button']}
                        href={'/support/contactus'}
                        label={'문의하기'}
                    />
                </li>
            </ul>
        </aside>
    );
};

export default SupportSideBar;