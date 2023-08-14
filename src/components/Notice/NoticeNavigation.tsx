import React from 'react';
import styles from './NoticeComponent.module.scss';

const NoticeNavigation = () => {
    return (
        <>
            <nav className={styles['navigation']}>
                <div className={styles['navigation-item']}>공지사항</div>
                <div className={styles['navigation-item']}>이벤트</div>
            </nav>
        </>
    );
};

export default NoticeNavigation;