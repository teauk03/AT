import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import Link from "next/link";
import Image from "next/image";
import GAME_CARDS from "@/data/Game/data-game-card.json";
import {GameCards} from "@/types/Reserd";

const ReserveList = () => {
    /* [예약카드] 게임 카드 목록 */
    const RESERVE_GAME_LIST = () => (
        <>
            {GAME_CARDS.ITEMS.map((game: GameCards, index: number) => (
                <div key={index} className={styles.gameCard}>
                    {/* 게임카드 헤더 */}
                    <div className={styles['game-card-header']}>
                        <Image  src={game.image} width={500} height={200} alt="게임 타이틀 이미지"/>
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
                        >예약하기</Link>
                        <Link
                            className={`${styles['search-buttons']} ${styles['card-buttons-msg']}`}
                            href={'/support'}
                        >문의하기</Link>
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