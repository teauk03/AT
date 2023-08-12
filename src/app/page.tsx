import React from "react";
import styles from './page.module.scss';
import {GetStartButton} from "@/components/UI/Button/DynamicHome/GetStartButton"
import {FooterClientComponent} from "@/components/UI/Footer/Footer";
import MusicGameSlide from "@/components/UI/CarouselSlide/MusicGameSlide";

const Home = (): JSX.Element => {
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
                        <GetStartButton/>
                    </section>

                    {/* Game Carousel Slide */}
                    <MusicGameSlide/>

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
                                It&apos;s an easy and fun way to start your journey in the world of programming!
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    )
}

export default Home;