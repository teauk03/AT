import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import AdminSvgItems from "@/components/Dashboard/Admin/AdminSvgItems";
import AdminAside from "@/components/Dashboard/Admin/AsideAdmin/AdminAside";
import AdminSearchBar from "@/components/Dashboard/Admin/SearchAdmin/AdminSearchBar";
import GlobalNavbar from "@/components/UI/Nav/GlobalNavbar";

const AdminLayout = async ({children}: { children: React.ReactNode }): Promise<JSX.Element> => {
    return (
        <>
            <GlobalNavbar/>
            <main className={styles.container}>
                <svg style={{display: 'none'}}>
                    <AdminSvgItems/>
                </svg>

                {/* AdminPage Header */}
                <div className={styles['page-header']}>
                    <AdminAside/>
                </div>

                {/* AdminPage Aside Content */}
                <section className={styles['page-content']}>
                    <AdminSearchBar/>
                    {children}
                </section>
            </main>
        </>
    );
};

export default AdminLayout;