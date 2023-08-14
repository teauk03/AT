import React from 'react';
import styles from "@/components/Help/Support/support.module.scss";

import DocumentList from "@/components/Help/Support/SupportItem";
import SupportSideBar from "@/components/Help/Support/SupportSideBar";
import {getServerSession} from "next-auth";
import AppLink from "@/components/UI/Link/AppLink";

import {connectDB} from "@/utils/mongoDb";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {SUPPORT_DEVICE_ITEMS} from "@/data/dataHelpItems";
import {FooterClientComponent} from "@/components/UI/Footer/Footer";


const Support = async (): Promise<JSX.Element> => {
    const session = await getServerSession(authOptions);
    console.log('session : ', session)
    const db = (await connectDB).db("forum")
    let result = await db.collection('inquiry').find({})
    if (!result) return <div>Loading...</div>

    try {
        return (
            <>
                <div className={styles.container}>
                    {/* [SLB] - Support Sidebar */}
                    <SupportSideBar session={session}/>

                    {/* Contents */}
                    <main className={styles.main}>
                        <section className={styles['top-section']}>
                            {/*<div className={styles['search-wrapper']}>
                            <SupportInputSearch/>
                        </div>*/}
                            <div className={styles['current-path']}>
                                <h1 className={styles['current-title']}>문의유형 선택</h1>
                                <p>문의유형을 선택하면 문의유형에 따라 <span>[자주 찾는 도움말]</span>을 확인할 수 있습니다.<br/>
                                    찾는 도움말이 보이지 않으면 <span>[검색]</span>을 이용해 원하는 도움말을 찾아 주세요.</p>
                            </div>

                            {/* 내부 span 임시태그 */}
                            <nav className={styles['device-type']}>
                                {SUPPORT_DEVICE_ITEMS.map((item, index) => (
                                    <span key={index} className={styles['device-item']}>
                                    {item.label}
                                </span>
                                ))}
                            </nav>
                        </section>

                        {/* DocumentList */}
                        <section className={styles['mid-section']}>
                            <DocumentList _id={result.toString()}/>
                        </section>
                    </main>
                </div>
            </>
        )

    } catch (error) {
        return (
            <p>Something went wrong!</p>
        )
    }
};

export default Support;