import React from 'react';
import styles from './ReserveHome.module.scss'
import Link from "next/link";
import GAME_CARDS from '@/data/data-game-card.json';
import GAME_NAVIGATION from '@/data/data-game-navigation.json';
import {GameCards, GameNavigation} from "@/types/Reserd";
import ReserveTopNavbar from "@/components/Reserve/ReserveTopNavbar";



const ReserveHome = () => {
    const GAME_NAVIGATION_JSON = JSON.stringify(GAME_NAVIGATION);
    const PARSED_GAME_LIST = JSON.parse(GAME_NAVIGATION_JSON);

    const GAME_CARDS_JSON = JSON.stringify(GAME_CARDS);
    const PARSED_GAME_CARDS = JSON.parse(GAME_CARDS_JSON);


    return (
        <>
            {/* Main - 예약페이지 메인 */}
            <main className={styles['reserve-main']}>
                {/* div - 예약페이지 컨테이너 */}
                <div className={styles['reserve-container']}>
                    {/* nav - 검색 네비게이션 */}
                    <ReserveTopNavbar/>

                    {/* section - Main Contents */}
                    <section className={styles['main-container']}>
                        {/* aside - 사이드 메뉴 */}
                        <aside className={styles['search-type']}>
                            {/* [KONAMI] 사이드 체크 박스 */}
                            <div className={styles['game-time']}>
                                <div className={styles['game-time-title']}>Konami</div>
                                <div className={styles['game-wrapper']}>
                                    {/* 사이드 체크 박스 */}
                                    {PARSED_GAME_LIST.GAME_KONAMI.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['game-style']}/>
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['game-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* [NAMCO] 사이드 체크 박스 */}
                            <div className={styles['game-time']}>
                                <div className={styles['game-time-title']}>Namco</div>
                                <div className={styles['game-wrapper']}>
                                    {PARSED_GAME_LIST.GAME_NAMCO.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['game-style']}/>
                                            {/*checked={game.checked}*/}
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['game-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* [ETC] 사이드 체크 박스 */}
                            <div className={styles['game-time']}>
                                <div className={styles['game-time-title']}>ETC</div>
                                <div className={styles['game-wrapper']}>
                                    {PARSED_GAME_LIST.GAME_ETC.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['game-style']}/>
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['game-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* section - 메인 컨텐츠 아이템 섹션 */}
                        <section className={styles['searched-games']}>
                            <header className={styles['searched-bar']}>
                                <div className={styles['searched-show']}>대여 목록</div>
                                <div className={styles['searched-sort']}>정렬 기준: <span className={styles['post-time']}>인기 게임 </span><span
                                    className={styles['menu-icon']}>▼</span></div>
                            </header>

                            {/* article - 예약 리스트 */}
                            <article className={styles['game-cards']}>
                                {/* [예약카드] 게임 카드 목록 */}
                                {PARSED_GAME_CARDS.GAME_CARDS.map((game: GameCards, index: number) => (
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
                            </article>
                        </section>
                    </section>
                </div>
            </main>
        </>
    );
};

export default ReserveHome;