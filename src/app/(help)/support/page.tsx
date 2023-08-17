import React from 'react';
import styles from "@/components/Help/Support/support.module.scss";

import DocumentList from "@/components/Help/Support/SupportItem";
import SupportSideBar from "@/components/Help/Support/SupportSideBar";
import SupportInputSearch from "@/components/Help/Support/SupportInputSearch";
import {getServerSession} from "next-auth";

import {authOptions} from "@/pages/api/auth/[...nextauth]";
import SUPPORT_NAV from "@/data/Support/data-support-nav.json";



const Support = async (): Promise<JSX.Element> => {
    const session = await getServerSession(authOptions);
    /* [SLB] - Support Sidebar */
    const SUPPORT_SIDE_NAV = () => <SupportSideBar session={session}/>

    /* Contents */
    const SUPPORT_NAVIGATION = () => (
        <header className={styles.header}>
            <section className={styles['header-section']}>
                <h1>문의유형 선택</h1>
                <p>문의유형을 선택하면 문의유형에 따라 <span>[자주 찾는 도움말]</span>을 확인할 수 있습니다.<br/>
                    찾는 도움말이 보이지 않으면 <span>[검색]</span>을 이용해 원하는 도움말을 찾아 주세요.</p>
            </section>

            {/* 내부 span 임시태그 */}
            <nav className={styles['nav-support']}>
                {SUPPORT_NAV.ITEMS.map((item, index) => (
                    <span key={index} className={styles['nav-support-item']}>{item.label}</span>
                ))}
            </nav>
        </header>
    )

    /* Document Search Bar */
    const SUPPORT_SEARCH = () => <SupportInputSearch/>

    /* DocumentList */
    const SUPPORT_DOCUMENT_LIST = () => <DocumentList/>

    /* Return Element */
    return (
        <main className={styles.container}>
            {SUPPORT_SIDE_NAV()}
            <div className={styles.contents}>
                {SUPPORT_NAVIGATION()}
                {SUPPORT_SEARCH()}
                {SUPPORT_DOCUMENT_LIST()}
            </div>
        </main>
    )
};

export default Support;