import React from 'react';
import styles from '@/components/Board/Forum/DetailPage/DetailsPage.module.scss';
import Link from "next/link";
import {BsHeart, BsShare} from "react-icons/bs";

const DetailsContentButtons = ({ isMenuVisible, setMenuVisible, result, USER_SESSION, handleDelete }: any) => (
    <div className={styles['details-item']}>
        {/* Bookmark Button */}
        <button className={styles.save}>
            <BsHeart/>
        </button>
        {/* Share Button */}
        <button className={styles.save}>
            <BsShare/>
        </button>
        {/* Meatballs Menu Button */}
        {USER_SESSION && USER_SESSION.user && result.userName === USER_SESSION.user.name && (
            <div className={`${styles.meatballs} ${isMenuVisible ? styles.active : ""}`}
                 onClick={() => setMenuVisible(!isMenuVisible)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     width={20} height={20} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                {/* Menu */}
                <div className={`${styles.menu}`}>
                    <Link className={styles.edit} href={`/edit/${result._id}`}>수정</Link>
                    <span className={styles.delete} onClick={() => handleDelete(result._id)}>삭제</span>
                </div>
            </div>
        )}
    </div>
);


export default DetailsContentButtons;