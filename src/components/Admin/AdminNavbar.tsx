import React from 'react';
import styles from "@/components/Admin/Admin.module.scss";
import Link from "next/link";
import ADMIN_ASIDE  from "@/data/Admin/data-admin-aside.json";
import ADMIN_SETTING  from "@/data/Admin/data-admin-setting.json";

const AdminNavbar = () => {
    return (
        <nav className={styles['admin-nav']}>
            <button className={styles['toggle-mob-menu']} aria-expanded="false" aria-label="open menu">
                <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#down"></use>
                </svg>
            </button>

            {/* AdminPage Menu */}
            <ul className={styles['admin-menu']}>
                <li className={styles['menu-heading']}>
                    <h3 className={styles.title}>Admin</h3>
                </li>
                {/* AdminPage Menu Items*/}
                {ADMIN_ASIDE.ITEMS.map((item, index)=> (
                    <li key={index}>
                        <Link href={item.route}>
                            <svg><use xlinkHref={item.svgHref}></use></svg>
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}

                {/* AdminPage Setting Items */}
                <li className={styles['menu-heading']}>
                    <h3 className={styles.title}>Settings</h3>
                </li>
                {ADMIN_SETTING.ITEMS.map((item, index) => (
                    <li key={index}>
                        <Link href={item.route}>
                            <svg><use xlinkHref={item.svgHref}></use></svg>
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}

                {/* Button */}
                <li>
                    <button className={styles['collapse-btn']} aria-expanded="true" aria-label="collapse menu">
                        <svg aria-hidden="true">
                            <use xlinkHref="#collapse"></use>
                        </svg>
                        <span>Collapse</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavbar;