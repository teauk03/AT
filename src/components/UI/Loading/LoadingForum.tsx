import React from 'react';
import styles from './Loading.module.scss';

const LoadingForum = () => {
    return (
        <div className={styles.loading}>
            <svg className={styles.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33"
                        r="30"></circle>
            </svg>
            <p className={styles['loading-text']}>
                로딩중 입니다.<br/>잠시만 기다려주세요.
            </p>
        </div>
    );
};

export default LoadingForum;