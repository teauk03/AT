import Image from "next/image";
import React from 'react';
import styles from "./Account.module.scss";
import {UserDataProps} from "@/types/Account";

const UserImage = ({user}: UserDataProps) => {
    return (
        // User Title
        <div className={styles.user}>
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