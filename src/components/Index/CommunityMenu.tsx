import React from 'react';
import styles from '@/app/page.module.scss';
import Link from "next/link";
import MAIN_PAGE from '@/data/data-index-page.json';

const CommunityMenu = () => {
    return (
        <section className={styles['community-section']}>
            <div className={styles['community-wrap']}>
                {MAIN_PAGE.ELEMENT.map((item, index) => (
                    <div className={`${styles.comunity} ${item.title === '이벤트' ? styles['event-item'] : ''}`} key={index}>                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <Link href={`${item.route}`} className={styles['community-link']}>{item.title} 바로가기</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommunityMenu;