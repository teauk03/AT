import Image from "next/image";
import React from 'react';
import styles from "./Account.module.scss";
import {UserDataProps} from "@/types/Account";

/* [Image] User Title */
const UserImage = ({user}: UserDataProps) => {
    return (
        <div className={styles['user-image-wrapper']}>
            <Image
                src={'/user.svg'}
                alt="user profile pic"
                width={40}
                height={40}
            />
            <span>
                {user ? user.name : "Loading..."}
            </span>
        </div>
    );
};

export default UserImage;