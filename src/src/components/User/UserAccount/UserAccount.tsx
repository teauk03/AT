'use client'
import axios from 'axios';
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
    summary?: string;
    github?: string;
    website?: string;
    technicalSkills?: string;
    work?: string;
    education?: string;
    lastLoginDate?: string;
}

interface UserDataProps {
    user: UserData;
    accountDetails: AccountDetail[];
}

const UserAccountComponent = ({user, accountDetails}: UserDataProps): JSX.Element => {
    const labelMap: Record<string, string | undefined> = {
        'Name': user?.name ?? '-',
        'Email': user?.email ?? '-',
        'Birth': user?.birth ?? '-',
        'Summary': user?.summary ?? '-',
        'Github': user?.github ?? '-',
        'Website': user?.website ?? '-',
        'Technical Skills': user?.technicalSkills ?? '-',
        'Work': user?.work ?? '-',
        'Education': user?.education ?? '-',
        'Last Access': user?.lastLoginDate ?? '-',
    };
    console.log(labelMap);

    // 유저 정보를 accountDetails 배열에 반영
    const updatedAccountDetails = accountDetails.map(detail => ({
        ...detail, value: labelMap[detail.label] ?? '-',
    }));

    // 활성화된 <input> 요소의 id를 추적하는 State
    const [editActiveId, setEditActiveId] = useState<number | null>(null);

    // User 정보 수정 핸들러
    const handleInfoSaveClick = async (detail: AccountDetail, index: number) => {
        try {
            const response = await axios.put(`/api/user/${user._id}`, {
                [detail.label.toLowerCase()]: updatedAccountDetails[index].value
            });

            if (response.status === 200) {
                setEditActiveId(null);
            } else {
                console.error("Failed to update user information");
            }
        } catch (error) {
            console.error("An error occurred while updating user information", error);
        }
    }

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
                                    {// type property가 'text'면 <input .../> 요소가 렌더링
                                        detail.type === 'text' ? (
                                            <input
                                                className={styles.input}
                                                type="text"
                                                value={detail.value}
                                                //
                                                disabled={detail.id !== editActiveId}
                                            />
                                        ) : (// type property가 'text'가 아니라면 <p> 요소 렌더링
                                            <p className={styles.count}>{detail.value}</p>
                                        )
                                    }
                                    {// type property가 'text'면 편집 상태 -> X-mark 및 Check 아이콘 노출
                                        detail.type === 'text' && editActiveId === detail.id && (
                                            <div className={styles['save-wrapper']}>
                                                <button
                                                    className={`${styles['edit-btn']} ${styles['exit-btn']}`}
                                                    onClick={() => setEditActiveId(null)}
                                                >
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                                <button
                                                    className={`${styles['edit-btn']} ${styles['check-btn']}`}
                                                    onClick={() => handleInfoSaveClick(detail, index)}
                                                >
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            </div>
                                        )
                                    }
                                    {// type property가 'text'일 때만 아이콘 노출, 편집 중일때는 비활성화됨
                                        detail.type === 'text' && editActiveId !== detail.id && (
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