import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import ReserveNavbar from "@/components/Reserve/Navbar/ReserveNavbar";
import ReserveHeader from "@/components/Reserve/Contents/ReserveHeader";
import GAME_CARDS from "@/data/Game/data-game-card.json";
import {GameCards} from "@/types/Reserd";
import Image from "next/image";
import Link from "next/link";

const ReserveContents = () => {
    return (
        <section className={styles['main-container']}>
            {/* aside - 사이드 메뉴 */}
            <ReserveNavbar/>

            {/* section - 메인 컨텐츠 아이템 섹션 */}
            <section className={styles['searched-games']}>
                {/* header - 예약 헤더 */}
                <ReserveHeader/>
                {/* article - 예약 리스트 */}
                <article className={styles['game-cards']}>
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
                </article>
            </section>
        </section>
    );
};

export default ReserveContents;