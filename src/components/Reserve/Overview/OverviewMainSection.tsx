'use client'
import React from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";
import {useSearchParams} from "next/navigation";
import SvgIconComponent from "@/components/SvgIconComponent";
import DATA from '@/data/Reserve/data-overview-information.json';
import GAMES_DATA from '@/data/Reserve/data-overview-games.json';
import ComplexSvgIconComponent from "@/components/SvgComplexIconComponent";

const OverviewMainSection = () => {
    const searchParams = useSearchParams();
    const GAME_TITLE = searchParams ? decodeURIComponent(searchParams.get('game') as string) : '';
    const gameInfo = GAMES_DATA.games.find(game => game.title === GAME_TITLE);
    const GAME_PRICE = gameInfo ? gameInfo.price : 'N/A';

    return (
        <section className={styles['game-explain']}>
            <img className={styles['game-bg']} alt=""/>
            {/* Game Logo */}
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
                    {/*Sound Vortex Exceed Gear*/}
                    <div className={styles['game-card-title']}>{GAME_TITLE}</div>
                    <div className={styles['game-action']}>
                        <SvgIconComponent width={20} height={20}
                                          svgPath={'M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z'}/>
                        <ComplexSvgIconComponent width={20} height={20}
                                                 className={`${styles.feather} ${styles['feather-heart']}`}>
                            <circle cx="18" cy="5" r="3"/>
                            <circle cx="6" cy="12" r="3"/>
                            <circle cx="18" cy="19" r="3"/>
                            <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>
                        </ComplexSvgIconComponent>
                    </div>
                </div>

                {/* 부제목 */}
                <div className={styles['game-subtitle-wrapper']}>
                    <div className={styles['company-name']}>
                        {gameInfo?.series_first}{' '}
                        <span className="comp-location">
                            {gameInfo?.series_last}
                        </span>
                    </div>
                </div>

                {/* 상세 설명 네비게이션 */}
                <nav className={styles['explain-bar']}>
                    <ul className={styles['explain-contents']}>
                        <li className={styles['explain-title']}>Genre</li>
                        <li className={styles['explain-subtitle']}>{gameInfo?.genre}</li>
                    </ul>
                    <ul className={styles['explain-contents']}>
                        <li className={styles['explain-title']}>Game</li>
                        <li className={styles['explain-subtitle']}>{gameInfo?.title}</li>
                    </ul>
                    <ul className={styles['explain-contents']}>
                        <li className={styles['explain-title']}>가격</li>
                        <li className={styles['explain-subtitle']}>{GAME_PRICE}</li>
                    </ul>
                    <ul className={styles['explain-contents']}>
                        <li className={styles['explain-title']}>시간</li>
                        <li className={styles['explain-subtitle']}>{gameInfo?.time}</li>
                    </ul>
                </nav>


                {/* 상세 설명 */}
                <article className={styles['overview-text']}>
                    <div className={styles['overview-text-header']}>개요</div>
                    <div className={styles['overview-text-subheader']}>-</div>
                </article>

                {/* 예약 안내 (data-overview-information.json) */}
                <article className={styles['overview-text']}>
                    {DATA.RESERVATION_INFORMATION.map((info, index) => (
                        <React.Fragment key={index}>
                            <div className={styles['overview-text-header']}>{info.title}</div>
                            {info.contents.map((content, contentIndex) => (
                                <div key={contentIndex} className={styles['overview-text-item']}>
                                    {content.item}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </article>
            </section>
        </section>
    );
};

export default OverviewMainSection;