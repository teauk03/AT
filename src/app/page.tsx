import React from "react";
import styles from './page.module.scss';
import Link from "next/link";
import AuthButton from "@/components/UI/Button/AuthButton";
import GlobalNavbarComponent from "@/components/UI/NavbarGlobal/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";

const Home = (): JSX.Element => {
    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <AuthButton/>
                <div className={styles.contents}>
                    {/* Content1 */}
                    <section className={styles.hero}>
                        <div className={styles.wrapper}>
                            <h1>Attack</h1>
                            <p>Hello</p>
                            <Link href={'/dataweb'}>Test Web</Link>
                            <Link href={'/dataweb/query'}>Query Web</Link>
                            <Link href={'/dataweb/dynamicRoute'}>dynamicRoute</Link>
                        </div>
                    </section>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    )
}

export default Home;