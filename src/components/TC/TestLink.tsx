import React from 'react';
import styles from "@/app/page.module.scss";
import Link from "next/link";

const TestLink = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <Link href={'/dataweb'}>Test Web</Link>
                <Link href={'/dataweb/query'}>Query Web</Link>
                <Link href={'/dataweb/dynamicRoute'}>dynamicRoute</Link>
                <Link href={'/dataweb/testJoin'}>testJoin</Link>
                <Link href={'/dataweb/testLogin'}>testLogin</Link>
            </div>
        </section>
    );
};

export default TestLink;