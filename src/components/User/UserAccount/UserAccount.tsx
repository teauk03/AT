'use client'
import React from "react";
import styles from "./UserAccount.module.scss";
import {VerticalNav} from "@/components/User/VerticalNav/VerticalNav";
import Image from "next/image";
import accountDetails from "@/data/userAccountData";
import {ObjectId} from "mongodb";

interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
}

interface UserDataProps {
    userData: UserData;
}

const UserAccountComponent = ({userData}: UserDataProps): JSX.Element => {
    console.log(userData)
    return (
        <div className={styles['profile-container']}>
            {/* Side Navbar */}
            <VerticalNav/>
            <div className={styles['profile-wrapper']}>
                <main className={styles.main}>
                    <div className={styles.user}>
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={40}
                            height={40}
                        />
                        <span>서강준</span>
                    </div>

                    <div className={styles['section-info']}>
                        {accountDetails.map((detail, index) => (
                            <div className={styles.account} key={index}>
                                <h2 className={styles['info-name']}>{detail.label}</h2>
                                {detail.type === 'text' ? (
                                    <input
                                        className={styles.input}
                                        type="text"
                                        value={detail.value}
                                        disabled={detail.disabled}
                                    />
                                ) : (
                                    <p className={styles.count}>{detail.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export {UserAccountComponent};