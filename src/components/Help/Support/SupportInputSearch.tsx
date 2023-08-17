'use client'
import React from 'react';
import styles from "@/components/Help/Support/support.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";

const SupportInputSearch = () => {
    return (
        <form className={styles.search}>
            <div className={styles['search-wrap']}>
                <div className={styles['search-wrap-header']}>
                    <h2>도움말 검색</h2>
                    <p>원하는 도움말을 검색해 보세요.</p>
                </div>
            </div>
            <div className={styles['search-bar']}>
                <input type="text" placeholder='Search the problem'/>
                <button className={styles['search-bar-btn']}>
                    <SvgIconComponent width={20} height={20} svgPath={'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'}/>
                </button>
            </div>
        </form>
    );
};

export default SupportInputSearch;