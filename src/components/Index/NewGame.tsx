'use client'
import React from 'react';
import styles from '@/app/page.module.scss';
import Link from "next/link";
import Image from "next/image"
import GAME_CARD from '@/data/Game/data-game-card.json';

const NewGame = () => {
    return (
        <section className={styles.games}>
            <div className={styles['games-wrapper']}>
                <ul className={styles['swiper-wrapper']}>
                    <li className={`${styles['swiper-slide']}`}>
                        <button type={"button"}>대표 게임</button>
                    </li>
                    <li className={`${styles['swiper-slide']}`}>
                        <button type={"button"}>인기 게임</button>
                    </li>
                    <li className={`${styles['swiper-slide']}`}>
                        <button type={"button"}>새로운 게임</button>
                    </li>
                </ul>
                <div className={styles['games-card']}>
                    {/* 3x3 그리드 게임 카드 */}
                    {GAME_CARD.ITEMS.slice(0,6).map((item, index) => (
                        <div className={styles['games-item']} key={index}>
                            <Image className={styles.gameImage} src={item.image} width={200} height={30} alt="게임 이미지"  />
                            <p className={styles.gameTitle}>{item.title}{index + 1}</p>
                            <Link href={`/game-detail/${index}`}>자세히 보기</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewGame;