import React from 'react';
import styles from "@/components/UI/Modal/Modal.module.scss";

const SearchModalButton = () => {
    /* 임시 Alert 핸들러 */
    const handleNoSymbol = () => {
        alert('준비중 입니다.')
    }

    return (
        <button className={styles['search-btn']} onClick={handleNoSymbol}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 width={20}
                 height={20} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
        </button>
    );
};

export default SearchModalButton;