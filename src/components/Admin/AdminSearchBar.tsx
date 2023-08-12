import React from 'react';
import styles from './Admin.module.scss'

const AdminSearchBar = () => {
    return (
        <form className={styles['search-form']}>
            <input type="search" placeholder="Search Pages..."/>
            <button type="submit" aria-label="submit form">
                <svg aria-hidden="true">
                    <use xlinkHref="#search"></use>
                </svg>
            </button>
        </form>
    );
};

export default AdminSearchBar;