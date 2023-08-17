import React from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";
import GAME_CARDS from "@/data/Game/data-game-card.json";

const OverviewAsideSection = () => {
    return (
        <section className={styles['game-overview-cards']}>
            {GAME_CARDS.ITEMS.map((game) => (
                <div className={styles['game-overview-card']}>
                    {/* 상세페이지 아이템 */}
                    <div className={`${styles['game-card']} ${styles['overview-card']}`}>
                        {/* [SLB] 상세페이지 아이템 */}
                        <div className={styles['overview-wrapper']}>
                            {/* 다른게임 */}
                            <div className={styles['overview-detail']}>
                                <div className={styles['game-card-title']}>{game.title}</div>
                                <div className={styles['game-card-subtitle']}>
                                    {game.series_first}{game.series_last}
                                </div>
                            </div>
                            {/* 좋아요 버튼 */}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" width={20} height={20} strokeLinecap="round" strokeLinejoin="round"
                                 className={`${styles.heart} ${styles.feather} ${styles['feather-heart']}`}>
                                <path
                                    d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z"/>
                            </svg>
                        </div>
                        {/* SLB - Navigation (다른 메뉴) */}
                        <div className={styles['game-overview-buttons']}>
                            <div className={`${styles['search-buttons']} ${styles['time-button']}`}>
                                1 hour
                            </div>
                            <div className={`${styles['search-buttons']} ${styles['level-button']}`}>
                                12,000
                            </div>
                            <div className={styles['game-stat']}>New</div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default OverviewAsideSection;