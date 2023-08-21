import React from "react";
import styles from './page.module.scss';
import GlobalNavbarComponent from "@/components/UI/NavbarGlobal/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";
import NewGame from "@/components/Index/NewGame";
import CommunityMenu from "@/components/Index/CommunityMenu";
import TitleImageSection from "@/components/Index/TitleImageSection";

const Home = (): JSX.Element => {
    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <TitleImageSection/>
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