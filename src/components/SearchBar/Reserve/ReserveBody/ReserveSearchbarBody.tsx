'use client'
import React from 'react';
import styles from "@/components/SearchBar/Reserve/ReserveSearchBar.module.scss";
import {BsSearch} from "react-icons/bs";

// type ReserveSearchProp = {
//
// }

const ReserveSearchbarBody = ({onChange}) => {
    return (
        <div className={styles['search-bar']}>
            <input
                className={styles['search-box']}
                placeholder={'게임을 입력해주세요.'}
                type="text"
                autoFocus
                onChange={onChange}
            />
            <button className={styles['search-button']}>
                <BsSearch/>
            </button>
        </div>
    );
};

export default ReserveSearchbarBody;