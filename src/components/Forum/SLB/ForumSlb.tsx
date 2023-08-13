'use client'
import React, {useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import ForumSlbMenu from "@/components/Forum/SLB/ForumSlbMenu";
import SearchModal from "@/components/UI/Modal/SearchModal";

const ForumSideNavbar = () => {
    const router = useRouter();

    /* 유저 세션 상태관리 */
    const {
        data: session,
        status
    } = useSession();

    /* 검색 모달 상태관리 */
    const [
        isSearchModalOpen,
        setIsSearchModalOpen
    ] = useState(false);

    const handleNewPostOnClick = (e: React.MouseEvent) => {
        if (status === 'unauthenticated') {
            e.preventDefault();
            alert('로그인 후 이용 가능합니다.');
            router.push('/login');
        } else {
            router.push('/write');
        }
    }

    /* 모달 열기 핸들러 */
    const handleOpenSearchModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsSearchModalOpen(true);
    }

    /* 모달 닫기 핸들러 */
    const handleCloseSearchModal = () => setIsSearchModalOpen(false);


    return (
        <nav className={styles['slb-nav']} role="sub-navigation">
            {/* Sub Menu Header */}
            <div className={styles['slb-title']}>
                <h2 className={styles.title}>Board</h2>

                {/* Search : Modal Popup Opens. */}
                <Link className={styles['link-write']} href={'/forum'} onClick={handleOpenSearchModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                    검색
                </Link>

                {/* Modal Rendering */}
                {isSearchModalOpen && (
                    <div onClick={handleCloseSearchModal} className={styles['modal-background']}>
                        <SearchModal/>
                    </div>
                )}

                {/* Create Write : Routing(../write) */}
                <Link className={styles['link-write']} href={'/write'} onClick={handleNewPostOnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                    </svg>
                    글작성
                </Link>
            </div>

            {/* Sub Menu */}
            <ForumSlbMenu/>
        </nav>
    );
};

export default ForumSideNavbar;