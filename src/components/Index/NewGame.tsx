import React from 'react';
import styles from '@/app/page.module.scss';
import Link from "next/link";
import Image from "next/image"

const NewGame = () => {
    return (
        <section className={styles.games}>
            <div className={styles['games-wrapper']}>
                <div className={styles['swiper-wrapper']}>
                    <div className={`${styles['swiper-slide']}`}><button type={"button"}>대표 게임</button></div>
                    <div className={`${styles['swiper-slide']}`}><button type={"button"}>새로운 게임</button></div>
                    <div className={`${styles['swiper-slide']}`}><button type={"button"}>인기 게임</button></div>
                </div>
                <div className={styles['games-card']}>
                    {/* 3x3 그리드 게임 카드 */}
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div className={styles.gameCard} key={index}>
                            <Image src={`/path/to/game/image${index}.png`} alt="게임 이미지" className={styles.gameImage} />
                            <p className={styles.gameTitle}>게임 이름 {index + 1}</p>
                            <Link href={`/game-detail/${index}`}>자세히 보기</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewGame;