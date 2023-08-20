import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import AdminSearchBar from "@/components/Dashboard/Admin/SearchAdmin/AdminSearchBar";
import AdminSvgItems from "@/components/Dashboard/Admin/AdminSvgItems";
import AdminAside from "@/components/Dashboard/Admin/AsideAdmin/AdminAside";
import ForumGridContainer from "@/components/Dashboard/Admin/ManagementComponent/ManagementGrid";

type MANAGEMENT_PROPS_TYPE = {
    title: string;
}

const ManagementComponent = ({title}: MANAGEMENT_PROPS_TYPE) => {
    return (
        <main className={styles.container}>
            <svg style={{display: 'none'}}>
                <AdminSvgItems/>
            </svg>

            {/* AdminPage Header */}
            <div className={styles['page-header']}>
                <AdminAside/>
            </div>

            <section className={styles['page-content']}>
                {/* AdminPage Aside Menu */}
                <AdminSearchBar/>
                {/* AdminPage Grid Container */}
                <section className={styles['grid-container']}>
                    <article>
                        <h1>{title}</h1>
                    </article>
                </section>
            </section>
        </main>
    );
};

export default ManagementComponent;