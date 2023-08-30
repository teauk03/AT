import React from 'react';
import styles from '@/components/Board/community.module.scss';

const Page = () => {
    return (
        <div className={styles.container}>
            {/* aside */}
            <aside className={styles.aside}>
                <div className={styles.asideInner}>
                    <div>t</div>
                    <button>글쓰기</button>
                    <ul className={styles.menu}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </aside>
            {/* main */}
            <main className={styles.contents}>
                <nav className={styles.navbar}>
                    <div className={styles.navInner}>
                        <button>{'< Aside 이벤트'}</button>
                        <button>이동 URL</button>
                        <button>마이페이지</button>
                        <button>로그인/로그아웃</button>
                    </div>
                </nav>
                <section className={styles.listSection}>
                    <article className={styles.article01}>article</article>
                    <article className={styles.article02}>article</article>
                </section>
            </main>
        </div>
    );
};

export default Page;