import React from "react";
import styles from './page.module.scss';
import MusicGameSlide from "@/components/UI/CarouselSlide/MusicGameSlide";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

const Home = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.contents}>
                    {/* Game Carousel Slide */}
                    <MusicGameSlide/>

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
        </div>
    )
}

export default Home;