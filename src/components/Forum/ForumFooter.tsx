'use client'
import React from "react";

interface ForumFooterProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

const ForumFooter = ({ currentPage, setCurrentPage, totalPages }: ForumFooterProps) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>←</button>
            {[...Array(Math.min(totalPages, 2))].map((_, index) => (
                <span key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</span>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>→</button>
        </>
    );
};


export default ForumFooter;