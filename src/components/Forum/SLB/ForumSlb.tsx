'use client'
import React, {useState} from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import Link from "next/link";
import ForumSlbMenu from "@/components/Forum/SLB/ForumSlbMenu";
import SearchModal from "@/components/UI/Modal/SearchModal";
import SvgIconComponent from "@/components/SvgIconComponent";

const ForumSideNavbar = () => {
        /* 검색 모달 상태관리 */
    const [
        isSearchModalOpen,
        setIsSearchModalOpen
    ] = useState(false);


    /* 모달 열기 핸들러 */
    const handleOpenSearchModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsSearchModalOpen(true);
    }

    /* 모달 닫기 핸들러 */
    const handleCloseSearchModal = () => setIsSearchModalOpen(false);


    return (
        <aside className={styles['aside-slb']} role="sub-navigation">
            {/* Sub Menu Header */}
            <div className={styles['aside-slb-title']}>
                {/* Search : Modal Popup Opens. */}
                <Link className={styles['aside-slb-link']} href={'/forum'} onClick={handleOpenSearchModal}>
                    <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
                    검색
                </Link>

                {/* Modal Rendering */}
                {isSearchModalOpen && (
                    <div onClick={handleCloseSearchModal} className={styles['aside-slb-modal']}>
                        <SearchModal/>
                    </div>
                )}
            </div>

            {/* Sub Menu */}
            <ForumSlbMenu/>
        </aside>
    );
};

export default ForumSideNavbar;