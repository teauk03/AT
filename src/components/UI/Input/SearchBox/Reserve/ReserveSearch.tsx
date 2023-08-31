import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import {BsSearch} from "react-icons/bs";

const ReserveSearch = () => (
    <div className={styles['search-bar']}>
        <input type="text" className={styles['search-box']} autoFocus/>
        <button className={styles['search-button']}>
            <BsSearch/>
        </button>
    </div>
);


export default ReserveSearch;