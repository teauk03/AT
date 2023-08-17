import React from 'react';
import styles from '@/components/User/MyPage/MyPage.module.scss';
import MyPageAside from "@/components/User/MyPage/Aside/MyPageAside";
import Profile from "@/components/User/MyPage/MyPageBody/Profile";
import Timeline from "@/components/User/MyPage/MyPageBody/Timeline";
import MyPageAsideRight from "@/components/User/MyPage/Aside/MyPageAsideRight";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const DynamicAccount = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    if (!user) {
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        }
    }

    return (
        <div className={styles.container}>
            <MyPageAside/>
            <main className={styles.main}>
                <Profile user={user}/>
                <Timeline/>
            </main>
            <MyPageAsideRight/>
        </div>
    );
};

export default DynamicAccount;