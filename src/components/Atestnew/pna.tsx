'use client'
import React, {useEffect, useState} from "react";
import styles from "./Pagination.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";

const Pna = ({path}: { path: string }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/notice/${path}`);
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
        <div className={styles['forum-footer']}>
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

export default Pna;