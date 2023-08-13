import React from 'react';
import styles from "@/components/Help/Support/support.module.scss";

import DocumentList from "@/components/Help/Support/SupportItem";
import SupportSideBar from "@/components/Help/Support/SupportSideBar";
import SupportInputSearch from "@/components/Help/Support/SupportInputSearch";
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

                        <section className={styles['bottom-section']}>
                            <p className={styles['contactus-text']}>
                                Can&apos;t find documentation for troubleshooting?
                            </p>
                            <AppLink
                                className={styles['contactus-button']}
                                href={'/support/contactus'}
                                label={'Contact Us'}
                            />
                        </section>
                    </main>
                </div>
                <FooterClientComponent/>
            </>
        )

    } catch (error) {
        return (
            <p>Something went wrong!</p>
        )
    }
};

export default Support;