'use client'
import React, {useEffect, useState} from "react";
import styles from "./Pagination.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";
import {pathTypeProps} from "@/types/Borad";

/**
 * 포럼의 페이지네이션 컴포넌트
 * @param {ForumFooterProps} props - 컴포넌트에 필요한 프로퍼티
 * @param {number} props.currentPage - 현재 페이지 번호
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentPage - 현재 페이지 상태 변경 함수
 * @param {number} props.totalPages - 전체 페이지 수
 * @returns {JSX.Element} 페이지네이션 컨트롤을 렌더링하는 요소
 */
const PaginationForum = ({path}: pathTypeProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/${path}/list`);
            const result = await res.json();
            const { totalPosts } = result;
            setTotalPages(Math.ceil(totalPosts / 10));
        };
        fetchData();
    }, [path]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    return (
        <div className={styles['main-footer']}>
            <button className={styles['move-btn']} onClick={handlePreviousPage} disabled={currentPage === 1}>
                <SvgIconComponent width={20} height={20} svgPath={'M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
            </button>
            {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
                <button key={index} className={styles['move-btn']} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                </button>
            ))}
            <button className={styles['move-btn']} onClick={handleNextPage} disabled={currentPage === totalPages}>
                <SvgIconComponent width={20} height={20} svgPath={'M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
            </button>
        </div>
    );
};

export default PaginationForum;