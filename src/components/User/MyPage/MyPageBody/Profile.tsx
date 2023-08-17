import React from 'react';
import styles from "@/components/User/MyPage/MyPage.module.scss";
import Image from "next/image";
import DefaultIMAGE from "@/../public/img/logo.jpg";
import {UserProfileData} from "@/types/Account";


const Profile = ({user}: UserProfileData) => {
    return (
        <>
            <section className={styles.profile}>
                <Image src={DefaultIMAGE} alt='유저 프로필 이미지' width={100} height={100}/>
                <div className={styles['profile-info']}>
                    <p>{user.name}</p>
                    <p>소개</p>
                </div>
            </section>
        </>
    );
};

export default Profile;