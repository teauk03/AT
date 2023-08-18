import React from 'react';
import styles from './SearchAdmin.module.scss';

const AdminSearchBar = () => {
    return (
        <div className={styles['search-and-user']}>
            <form className={styles['search-form']}>
                <input type="search" placeholder="Search Pages..."/>
                <button type="submit" aria-label="submit form">
                    <svg aria-hidden="true">
                        <use xlinkHref="#search"></use>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default AdminSearchBar;