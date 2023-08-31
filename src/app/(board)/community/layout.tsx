import React from 'react';
import styles from "@/components/Board/Forum/Forum.module.scss";
import GlobalNavbar from "@/components/UI/Nav/GlobalNavbar";
import Footer from "@/components/UI/Footer/Footer";

const ForumLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbar/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.contents}>
                        {children}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default ForumLayout;