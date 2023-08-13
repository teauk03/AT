import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";

const ForumFooterSearchItems = () => {
    /* 임시 Alert 핸들러 */
    const handleNoSymbol = () => {
        alert('준비중 입니다.')
    }

    return (
        <>
            {/* Search Select */}
            <select className={styles['forum-footer-select']} name="title" id="title">
                <option value="title">제목</option>
                <option value="title">본문</option>
                <option value="title">닉네임</option>
            </select>

            {/* Search Input */}
            <input
                className={styles['forum-footer-input']}
                type="text"
            />

            {/* Search Button */}
            <button className={styles['forum-search-button']} onClick={handleNoSymbol}>
                <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
            </button>
        </>
    );
};

export default ForumFooterSearchItems;