import React from 'react';
import styles from '@/components/Dashboard/Admin/Admin.module.scss';
import AdminAside from "@/components/Dashboard/Admin/AsideAdmin/AdminAside";
import AdminSearchBar from "@/components/Dashboard/Admin/SearchAdmin/AdminSearchBar";
import AdminGridContainer from "@/components/Dashboard/Admin/ContentsAdmin/AdminGridContainer";
import AdminSvgItems from "@/components/Dashboard/Admin/AdminSvgItems";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";


const AdminPage = async () => {
    const session = await getServerSession(authOptions)

    if (session?.user?.role !== 'admin' || null) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return (
        <main className={styles.container}>
            <svg style={{display: 'none'}}>
                <AdminSvgItems/>
            </svg>

            {/* AdminPage Header */}
            <div className={styles['page-header']}>
                <AdminAside/>
            </div>

            {/* AdminPage Content */}
            <section className={styles['page-content']}>
                <AdminSearchBar/>
                {/* AdminPage Grid Container */}
                <AdminGridContainer/>
            </section>
        </main>
    )
}

export default AdminPage;