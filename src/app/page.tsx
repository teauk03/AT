import styles from './page.module.scss';
import DynamicButton from "@/components/Button/DynamicButton/DynamicButton"
import FooterClientComponent from "@/components/Footer/Footer";
import React from "react";

export default async function Home(): Promise<JSX.Element> {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.contents}>
                    {/* Content1 */}
                    <section className={styles.hero}>
                        <div className={styles.wrapper}>
                            <h1>Online Arduino Simulation</h1>
                            <p>Turn your Arduino ideas into reality using an Arduino simulator web app!</p>
                        </div>
                    </section>

                    {/* Content2 */}
                    <section className={styles.arduino}>
                        <div className={styles.wrapper}>
                            <h3>Arduino</h3>
                            <p>
                                Here at Arduino Simulator, we provide a user-friendly environment<br/>
                                for you to experiment with your Arduino projects online.
                            </p>
                        </div>
                    </section>


                    {/* Content3 */}
                    <section className={styles['block-coding']}>
                        <div className={styles.wrapper}>
                            <h3>Block Coding</h3>
                            <p>Enhance your logical thinking with block coding.<br/>
                                It's an easy and fun way to start your journey in the world of programming!
                            </p>
                        </div>
                    </section>


                    {/* Content4 */}
                    <section className={styles.news}>
                        <h3>Latest news</h3>
                        <div className={styles.wrapper}>
                            <p>DB - Announcement</p>
                        </div>
                    </section>


                    {/* Content5 */}
                    <section className={styles.community}>
                        <h3>Community</h3>
                        <div className={styles.wrapper}>
                            <p>DB - Community</p>
                        </div>
                    </section>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    )
}