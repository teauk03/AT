import React from 'react';
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";
import styles from "@/components/Board/Forum/Forum.module.scss";
import LeftNavBar from "@/components/UI/Nav/LeftNavBar/LeftNavBar";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";

const ForumLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <ForumHeader/>
                    {children}
                </div>
            </main>
            <FooterClientComponent/>
        </>
    );
};

export default ForumLayout;