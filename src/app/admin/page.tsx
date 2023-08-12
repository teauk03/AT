import React from 'react';
import styles from '../../components/Admin/Admin.module.scss';
import AdminNavbar from "@/components/Admin/AdminNavbar";
import AdminSearchBar from "@/components/Admin/AdminSearchBar";
import AdminGridContainer from "@/components/Admin/AdminGridContainer";
import AdminSvgItems from "@/components/Admin/AdminSvgItems";
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
        <>
            <svg style={{display: 'none'}}>
                <AdminSvgItems/>
            </svg>

            {/* AdminPage Header */}
            <div className={styles['page-header']}>
                <AdminNavbar/>
            </div>

            {/* AdminPage Content */}
            <section className={styles['page-content']}>
                <div className={styles['search-and-user']}>
                    <AdminSearchBar/>
                </div>

                {/* AdminPage Grid Container */}
                <AdminGridContainer/>
            </section>
        </>
    )
}

export default AdminPage;