import React from 'react';
import styles from "@/components/UI/Modal/Modal.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";

const SearchModalButton = () => {
    /* 임시 Alert 핸들러 */
    const handleNoSymbol = () => {
        alert('준비중 입니다.')
    }

    return (
        <button className={styles['search-btn']} onClick={handleNoSymbol}>
            <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
        </button>
    );
};

export default SearchModalButton;