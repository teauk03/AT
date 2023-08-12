'use client'
import React, {useState} from 'react';
import Link from "next/link";
import styles from './DetailsPage.module.scss';
import {useDeletePost} from "@/hooks/Board/useDeletePost";

const DetailsIndex = ({result, USER_SESSION}: any) => {
    console.log(result)
    console.log(USER_SESSION)
    console.log(result.userName, USER_SESSION?.user?.name)
    const {handleDelete} = useDeletePost();

    const [
        isMenuVisible,
        setMenuVisible
    ] = useState(false);

    return (
        <div className={styles.container}>
            {/* Contents Header */}
            <div className={styles.user}>
                {/* Author */}
                <div className={styles['author-wrapper']}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" width={20}
                         height={20} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                    <div className={styles['post-author']}>
                        {result.userName}
                    </div>
                </div>

                <div className={styles['details-item']}>
                    {/* Bookmark Button */}
                    <button className={styles.save}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             width={20} height={20} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                        </svg>
                    </button>

                    {/* Share Button */}
                    <button className={styles.save}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             width={20} height={20} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
                        </svg>
                    </button>

                    {/* Meatballs Menu Button */}
                    {/* TODO - 로그아웃 상태에서 URL 접속 차단하기 */}
                    {USER_SESSION && USER_SESSION.user && result.userName === USER_SESSION.user.name && (
                        <div className={`${styles.meatballs} ${isMenuVisible ? styles.active : ""}`}
                             onClick={() => setMenuVisible(!isMenuVisible)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 width={20} height={20} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"/>
                            </svg>

                            {/* Menu */}
                            <div className={`${styles.menu}`}>
                                <Link className={styles.edit} href={`/edit/${result._id}`}>수정</Link>
                                <span className={styles.delete} onClick={() =>
                                    handleDelete(result._id)}>
                                삭제
                            </span>
                            </div>
                        </div>
                    )}
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