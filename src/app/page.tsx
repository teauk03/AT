import React from "react";
import styles from './page.module.scss';
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";
import NewGame from "@/components/Index/NewGame";
import CommunityMenu from "@/components/Index/CommunityMenu";

const Home = (): JSX.Element => {
    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <section className={styles['full-page-scroll']}/>
                <div className={styles.contents}>
                    <NewGame/>
                    <CommunityMenu/>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    )
}

export default Home;