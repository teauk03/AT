'use client'
import React, {useState} from "react";
import styles from "./UserAccount.module.scss";
import Image from "next/image";
import {ObjectId} from "mongodb";
import {VerticalNav} from "@/components/User/VerticalNav/VerticalNav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

interface AccountDetail {
    id: number;
    label: string;
    value: string;
    disabled: boolean;
    type: 'text' | 'paragraph';
}

interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
}

interface UserDataProps {
    user: UserData;
    accountDetails: AccountDetail[];
}

const UserAccountComponent = ({user, accountDetails}: UserDataProps): JSX.Element => {
    // 유저 정보를 accountDetails 배열에 반영
    const updatedAccountDetails = accountDetails.map((detail) => {
        if (detail.label === 'Name') {
            return {...detail, value: user?.name};
        }
        if (detail.label === 'Email') {
            return {...detail, value: user?.email};
        }
        if (detail.label === 'Birth') {
            return {...detail, value: user?.birth};
        }
        return detail;
    });

    // 활성화된 <input> 요소의 id를 추적하는 State
    const [editActiveId, setEditActiveId] = useState<number | null>(null);
    console.log(editActiveId)

    return (
        <div className={styles['profile-container']}>
            {/* Side Navbar */}
            <VerticalNav/>

            <div className={styles['profile-wrapper']}>
                <main className={styles.main}>
                    {/* User Title */}
                    <div className={styles.user}>
                        <Image
                            src={'/user.svg'}
                            alt="user profile pic"
                            width={40}
                            height={40}
                        />
                        <span>{user ? user.name : "Loading..."}</span>
                    </div>

                    {/* User Info */}
                    <div className={styles['section-info']}>
                        {
                            updatedAccountDetails.map((detail, index) => (
                                <div className={styles.account} key={index}>
                                    <h2 className={styles['info-name']}>{detail.label}</h2>
                                    {// type 프로퍼티가 'text'면 <input .../> 요소가 렌더링
                                        detail.type === 'text' ? (
                                            <input
                                                className={styles.input}
                                                type="text"
                                                value={detail.value}
                                                //
                                                disabled={detail.id !== editActiveId}
                                            />
                                        ) : (// type 프로퍼티가 'text'가 아니라면 <p> 요소 렌더링
                                            <p className={styles.count}>{detail.value}</p>
                                        )
                                    }
                                    {
                                        detail.type === 'text' && editActiveId === detail.id && (
                                            <div className={styles['save-wrapper']}>
                                                <button onClick={() => setEditActiveId(null)}>
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                                <button onClick={() => {/*수정 내용 저장 로직*/}}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            </div>
                                        )
                                    }
                                    {// type 프로퍼티가 'text'일 때만 아이콘 노출
                                        detail.type === 'text' && (
                                            <div className={styles['edit-wrapper']}>
                                                <button className={styles['edit-btn']} onClick={() => setEditActiveId(detail.id)}>
                                                    <FontAwesomeIcon icon={faPen}/>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

export {UserAccountComponent};