import React from 'react';
import styles from '@/components/User/MyPage/MyPage.module.scss';
import MyPageAside from "@/components/User/MyPage/Aside/MyPageAside";
import Profile from "@/components/User/MyPage/MyPageBody/Profile";
import Timeline from "@/components/User/MyPage/MyPageBody/Timeline";
import MyPageAsideRight from "@/components/User/MyPage/Aside/MyPageAsideRight";

const DynamicAccount = () => {
    return (
        <div className={styles.container}>
            <MyPageAside/>
            <main className={styles.main}>
                <Profile/>
                <Timeline/>
            </main>
            <MyPageAsideRight/>
        </div>
    );
};

export default DynamicAccount;