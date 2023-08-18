import React from 'react';
import styles from "@/components/Dashboard/Admin/AsideAdmin/AsideAdmin.module.scss";
import ADMIN_ASIDE  from "@/data/Admin/data-admin-aside.json";
import ADMIN_SETTING  from "@/data/Admin/data-admin-setting.json";
import MenuSection from "@/components/Dashboard/Admin/AsideAdmin/AsideMenuSection/MenuSection";

const AdminAside = () => {
    return (
        <aside className={styles['admin-nav']}>
            {/* AdminPage Menu */}
            <ul className={styles['admin-menu']}>
                {/* AdminPage Menu */}
                <MenuSection aside_title="Admin" items={ADMIN_ASIDE.ITEMS}/>
                <MenuSection aside_title="Settings" items={ADMIN_SETTING.ITEMS} />
            </ul>
        </aside>
    );
};

export default AdminAside;