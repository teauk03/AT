import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";

const AdminProfile = () => {
    return (
        <div className={styles['admin-profile']}>
            <span className={styles.greeting}>Hello admin</span>
            <div className={styles.notifications}>
                <span className={styles.badge}>1</span>
                <svg><use xlinkHref="#users"></use></svg>
            </div>
        </div>
    );
};

export default AdminProfile;