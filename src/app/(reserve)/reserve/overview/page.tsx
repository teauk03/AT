import React from 'react';
import styles from './ReserveOverview.module.scss';
import ReserveTopNavbar from "@/components/Reserve/ReserveTopNavbar";

const Overview = () => {
    return (
        <div className={`${styles.wrapper} ${styles['detail-page']}`}>
            {/* nav - 검색 네비게이션 */}
            {/*<ReserveTopNavbar/>*/}

            {/* 상세페이지 컨테이너 */}
            <main className={styles['game-overview']}>
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

                <section className={styles['game-explain']}>
                    <img className={styles['game-bg']} alt=""/>
                    <div className={styles['game-logos']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                             width={20} height={20} style={{backgroundColor: '#f76754'}}>
                            <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z"
                                  fill="#042b48" data-original="#212121"></path>
                            <path xmlns="http://www.w3.org/2000/svg"
                                  d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe"
                                  data-original="#f4511e"></path>
                        </svg>
                    </div>

                    {/* 상세 설명 페이지 콘텐츠 */}
                    <section className={styles['game-explain-content']}>
                        {/* 상세 설명 페이지 헤더 */}
                        <div className={styles['game-title-wrapper']}>
                            <div className={styles['game-card-title']}>Sound Vortex Exceed Gear</div>
                            <div className={styles['game-action']}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2" width={20} height={20} strokeLinecap="round" strokeLinejoin="round"
                                     className={`${styles.feather} ${styles['feather-heart']}`}>
                                    <path
                                        d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" width={20} height={20}
                                     strokeLinecap="round" strokeLinejoin="round"
                                     className={`${styles.feather} ${styles['feather-heart']}`}>
                                    <circle cx="18" cy="5" r="3"/>
                                    <circle cx="6" cy="12" r="3"/>
                                    <circle cx="18" cy="19" r="3"/>
                                    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>
                                </svg>
                            </div>
                        </div>

                        {/* 부제목 */}
                        <div className={styles['game-subtitle-wrapper']}>
                            <div className={styles['company-name']}>Konami <span className="comp-location">BEMANI Series</span>
                            </div>
                            <div className={styles.posted}>Posted 8 days ago<span className="app-number">98 Application</span>
                            </div>
                        </div>

                        {/* 상세 설명 네비게이션 */}
                        <nav className={styles['explain-bar']}>
                            <ul className={styles['explain-contents']}>
                                <li className={styles['explain-title']}>Genre</li>
                                <li className={styles['explain-subtitle']}>Music</li>
                            </ul>
                            <ul className={styles['explain-contents']}>
                                <li className={styles['explain-title']}>Game</li>
                                <li className={styles['explain-subtitle']}>Sound Vortex</li>
                            </ul>
                            <ul className={styles['explain-contents']}>
                                <li className={styles['explain-title']}>가격</li>
                                <li className={styles['explain-subtitle']}>12,000</li>
                            </ul>
                            <ul className={styles['explain-contents']}>
                                <li className={styles['explain-title']}>시간</li>
                                <li className={styles['explain-subtitle']}>1 hours</li>
                            </ul>
                        </nav>

                        {/* 상세 설명 */}
                        <article className={styles['overview-text']}>
                            <div className={styles['overview-text-header']}>Overview</div>
                            <div className={styles['overview-text-subheader']}>We believe that design (and you)
                                will be critical to the company's success. You will work with our
                                founders and our early customers to help define and build our
                                product functionality, while maintaining the quality bar that
                                customers have come to expect from modern SaaS applications. You
                                have a strong background in product design with a quantitavely anf
                                qualitatively analytical mindset. You will also have the opportunity
                                to craft our overall product and visual identity and should be
                                comfortable to flex into working.
                            </div>
                        </article>

                        {/* 예약 안내 */}
                        <article className={styles['overview-text']}>
                            <div className={styles['overview-text-header']}>예약 안내</div>
                            <div className={styles['overview-text-item']}>3+ years working as a product
                                designer.
                            </div>
                            <div className={styles['overview-text-item']}>A portfolio that highlights your
                                approach to problem solving, as well as you skills in UI.
                            </div>
                            <div className={styles['overview-text-item']}>Experience conducting research and
                                building out smooth flows.
                            </div>
                            <div className={styles['overview-text-item']}>Excellent communication skills with a
                                well-defined design process.
                            </div>
                            <div className={styles['overview-text-item']}>Familiarity with design tools like
                                Sketch and Figma
                            </div>
                            <div className={styles['overview-text-item']}>Up-level our overall design and bring
                                consistency to end-user facing properties
                            </div>
                        </article>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Overview;