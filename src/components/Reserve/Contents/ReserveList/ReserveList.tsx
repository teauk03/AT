import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import Link from "next/link";
import GAME_CARDS from "@/data/Game/data-game-card.json";
import {GameCards} from "@/types/Reserd";

const ReserveList = () => {
    /* [예약카드] 게임 카드 목록 */
    const RESERVE_GAME_LIST = () => (
        <>
            {GAME_CARDS.GAME_CARDS.map((game: GameCards, index: number) => (
                <div key={index} className={styles['game-card']}>
                    {/* 게임카드 헤더 */}
                    <div className={styles['game-card-header']}>
                        <img src={game.image} alt="Title Image"/>
                        <div className={styles['menu-dot']}></div>
                    </div>
                    <div className={styles['game-card-title']}>{game.title}</div>
                    <div className={styles['game-card-subtitle']}>{game.subtitle}</div>

                    {/* 예약카드 정보 버튼 박스 */}
                    <div className={styles['game-detail-buttons']}>
                        <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>{game.company}</button>
                        <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>1 hours</button>
                        <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>{game.price}₩</button>
                    </div>

                    {/* 상세페이지 이동 링크 박스 */}
                    <div className={styles['game-card-buttons']}>
                        <Link
                            className={`${styles['search-buttons']} ${styles['card-buttons']}`}
                            href={`/reserve/overview?game=${encodeURIComponent(game.title)}`}
                        >Apply Now</Link>
                        <Link
                            className={`${styles['search-buttons']} ${styles['card-buttons-msg']}`}
                            href={'/reserve'}
                        >Messages</Link>
                    </div>
                </div>
            ))}
        </>
    )

    /* Result */
    return (
        <article className={styles['game-cards']}>
            {RESERVE_GAME_LIST()}
        </article>
    );
};

export default ReserveList;