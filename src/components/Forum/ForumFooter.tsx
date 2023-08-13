import React from "react";

interface ForumFooterProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

const ForumFooter = ({currentPage, setCurrentPage, totalPages}: ForumFooterProps) => {
    console.log('totalPages:', totalPages);
    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>←</button>
            {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
                <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>→</button>
        </>
    );
};

export default ForumFooter;