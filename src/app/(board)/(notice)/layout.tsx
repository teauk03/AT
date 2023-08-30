import React from 'react';
import styles from "@/components/Board/Forum/Forum.module.scss";
import GlobalNavbar from "@/components/UI/Nav/GlobalNavbar";
import Footer from "@/components/UI/Footer/Footer";
import LeftNavBar from "@/components/UI/Nav/LeftNavBar/LeftNavBar";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";

const NoticeLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <LeftNavBar/>
                    <div className={styles.contents}>
                        <ForumHeader/>
                        {children}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default NoticeLayout;