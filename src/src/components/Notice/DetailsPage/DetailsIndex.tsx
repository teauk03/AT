'use client'
import React, {useState} from 'react';
import Link from "next/link";
import styles from './DetailsPage.module.scss';
import {useDeletePost} from "@/hooks/Board/useDeletePost";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faEllipsis, faBookmark} from "@fortawesome/free-solid-svg-icons";

const DetailsIndex = ({result}: any) => {
    const {handleDelete} = useDeletePost();
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <div className={styles.container}>
            {/* Contents Header */}
            <div className={styles.user}>
                <span className={styles.name}>
                    <FontAwesomeIcon className={styles.icon} icon={faUser}/>
                    {result.userName}
                </span>
                <div className={styles['details-item']}>
                    <button className={styles.save}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>

                    {/* Meatballs Menu Btn */}
                    <div className={`${styles.meatballs} ${isMenuVisible ? styles.active : ""}`}
                         onClick={() => setMenuVisible(!isMenuVisible)}>
                        <FontAwesomeIcon icon={faEllipsis}/>

                        {/* Menu */}
                        <div className={`${styles.menu}`}>
                            <Link className={styles.edit} href={`/edit/${result._id}`}>수정</Link>
                            <span className={styles.delete} onClick={() => handleDelete(result._id.toString())}>삭제</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contents Main */}
            <div className={styles.contents}>
                <h1 className={styles.title}>{result.title}</h1>
                <p className={styles['main-text']}>{result.content}</p>
            </div>
        </div>
    );
};

export default DetailsIndex;