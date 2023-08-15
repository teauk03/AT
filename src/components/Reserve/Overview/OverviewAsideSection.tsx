import React from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";

const OverviewAsideSection = () => {
    return (
        <section className={styles['game-overview-cards']}>
            <div className={styles['game-overview-card']}>
                {/* 상세페이지 아이템 */}
                <div className={`${styles['game-card']} ${styles['overview-card']}`}>
                    {/* [SLB] 상세페이지 아이템 */}
                    <div className={styles['overview-wrapper']}>
                        <svg viewBox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg"
                             width={20} height={20} style={{backgroundColor: '#2e2882'}}>
                            <g fill="#feb0a5">
                                <path
                                    d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0"/>
                                <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0"/>
                            </g>
                            <path
                                d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                                fill="#feb0a5"/>
                        </svg>

                        {/* 다른게임 */}
                        <div className={styles['overview-detail']}>
                            <div className={styles['game-card-title']}>beatmania IIDX</div>
                            <div className={styles['game-card-subtitle']}>
                                Konami BEMANI Series
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
                        <div className={styles['game-day']}>4d</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewAsideSection;