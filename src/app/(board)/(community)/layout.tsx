import React from 'react';
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";
import styles from "@/components/Board/Forum/ForumItem.module.scss";
import LeftNavBar from "@/components/UI/Nav/LeftNavBar/LeftNavBar";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";

const ForumLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* 커뮤니티 네비게이션 */}
                    <LeftNavBar/>
                    {/* 게시글 렌더링 */}
                    <div className={styles.contents}>
                        {/* Forum Header */}
                        <ForumHeader/>
                        {children}
                    </div>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    );
};

export default ForumLayout;