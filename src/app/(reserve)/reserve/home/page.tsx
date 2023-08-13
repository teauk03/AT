import React from 'react';
import styles from './ReserveHome.module.scss'
import GAME_CARDS from '@/data/data-game-card.json';
import GAME_NAVIGATION from '@/data/data-game-navigation.json';


interface GameNavigation {
    id: string;
    label: string;
    count: number;
    checked: boolean;
}

interface GameCards {
    company: string;
    title: string;
    subtitle: string;
    backgroundColor: string;
    price: string;
    image: string;
}


const ReserveHome = () => {
    const GAME_NAVIGATION_JSON = JSON.stringify(GAME_NAVIGATION);
    const PARSED_GAME_LIST = JSON.parse(GAME_NAVIGATION_JSON);

    const GAME_CARDS_JSON = JSON.stringify(GAME_CARDS);
    const PARSED_GAME_CARDS = JSON.parse(GAME_CARDS_JSON);


    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {/*<div className={styles['search-menu']}>
                        <div className={styles['search-bar']}>
                            <input type="text" className={styles['search-box']} autoFocus/>
                            <div className={`${styles.item} ${styles.search}`}>Product Designer
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`${styles.feather} ${styles['feather-briefcase']}`}>
                                    <path d="M18 6L6 18M6 6l12 12"/>
                                </svg>
                            </div>
                            <div className={`${styles.item} ${styles.search}`}>UI Designer
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-x">
                                    <path d="M18 6L6 18M6 6l12 12"/>
                                </svg>
                            </div>
                        </div>

                        <div className={styles['search-location']}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.feather} ${styles['feather-briefcase']}`}>
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Londontowne, MD
                        </div>

                        <div className={styles['search-job']}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className={`${styles.feather} ${styles['feather-briefcase']}`}>
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                            </svg>
                            <input type="text" placeholder="Job Type"/>
                        </div>
                        <div className={styles['search-salary']}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                                 fill="currentColor" strokeWidth=".4">
                                <path
                                    d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
                                    stroke="currentColor"/>
                                <path
                                    d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
                                    stroke="currentColor"/>
                                <path
                                    d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
                                    stroke="currentColor"/>
                                <path d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z" stroke="currentColor"/>
                            </svg>
                            <input type="text" placeholder="Salary Range"/>
                        </div>
                        <button className="search-button">Find Job</button>
                    </div>*/}
                    <div className={styles['main-container']}>
                        <div className={styles['search-type']}>

                            {/* 사이드 검색 박스 */}
                            <div className={styles.alert}>
                                <div className={styles['alert-title']}>게임 검색</div>
                                <div className={styles['alert-subtitle']}>원하는 게임을 검색하세요.
                                </div>
                                <input type="text" placeholder="게임 키워드를 입력하세요"/>
                                <button className={styles['search-buttons']}>검색</button>
                            </div>

                            {/* [KONAMI] 사이드 체크 박스 */}
                            <div className={styles['job-time']}>
                                <div className={styles['job-time-title']}>Konami</div>
                                <div className={styles['job-wrapper']}>
                                    {PARSED_GAME_LIST.GAME_KONAMI.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['job-style']}/>
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['job-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* [NAMCO] 사이드 체크 박스 */}
                            <div className={styles['job-time']}>
                                <div className={styles['job-time-title']}>Namco</div>
                                <div className={styles['job-wrapper']}>
                                    {PARSED_GAME_LIST.GAME_NAMCO.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['job-style']}
                                                   checked={game.checked}/>
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['job-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* [ETC] 사이드 체크 박스 */}
                            <div className={styles['job-time']}>
                                <div className={styles['job-time-title']}>Namco</div>
                                <div className={styles['job-wrapper']}>
                                    {PARSED_GAME_LIST.GAME_ETC.map((game: GameNavigation, index: number) => (
                                        <div key={index} className={styles['type-container']}>
                                            <input type="checkbox" id={game.id} className={styles['job-style']}/>
                                            <label htmlFor={game.id}>{game.label}</label>
                                            <span className={styles['job-number']}>{game.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles['searched-jobs']}>
                            <div className={styles['searched-bar']}>
                                <div className={styles['searched-show']}>대여 목록</div>
                                <div className={styles['searched-sort']}>정렬 기준: <span className={styles['post-time']}>인기 게임 </span><span
                                    className={styles['menu-icon']}>▼</span></div>
                            </div>

                            {/* 예약 카드 */}
                            <div className={styles['job-cards']}>
                                {PARSED_GAME_CARDS.GAME_CARDS.map((game: GameCards, index: number) => (
                                    <div key={index} className={styles['job-card']}>
                                        <div className={styles['job-card-header']}>
                                            <img src={game.image} alt="Title Image"/>
                                            <div className={styles['menu-dot']}></div>
                                        </div>
                                        <div className={styles['job-card-title']}>{game.title}</div>
                                        <div className={styles['job-card-subtitle']}>{game.subtitle}</div>
                                        <div className={styles['job-detail-buttons']}>
                                            <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>{game.company}</button>
                                            <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>1 hours</button>
                                            <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>{game.price}₩</button>
                                        </div>
                                        <div className={styles['job-card-buttons']}>
                                            <button className={`${styles['search-buttons']} ${styles['card-buttons']}`}>Apply Now</button>
                                            <button className={`${styles['search-buttons']} ${styles['card-buttons-msg']}`}>Messages</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReserveHome;