'use client'
import React, {useState} from 'react';
import styles from "@/app/(reserve)/reserve/[overview]/ReserveOverview.module.scss";
import {useSearchParams} from "next/navigation";
import SvgIconComponent from "@/components/SvgIconComponent";
import ComplexSvgIconComponent from "@/components/SvgComplexIconComponent";
import Image from "next/image"
import getGameInfo from "@/utils/Game/getGameInfo";
import OverviewText from "@/components/Reserve/Overview/OverviewText/OverviewText";
import OverviewExplainContent from "@/components/Reserve/Overview/OverviewExplainContent/OverviewExplainContent";
import DATA from '@/data/Reserve/data-overview-information.json';
import Link from "next/link";

const OverviewMainSection = () => {
    const searchParams = useSearchParams();
    const queryGameTitle = searchParams ? decodeURIComponent(searchParams.get('game') as string) : '';
    const gameInfo = getGameInfo(queryGameTitle);

    /* 체크박스 체킹 유무 */
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsCheckBoxChecked(e.target.checked);
    const handleReserveClick = (e: React.MouseEvent) => {
        if (!isCheckBoxChecked) {
            alert('내용(예약 안내)을 숙지해야 예약하실 수 있습니다.');
            e.preventDefault();
        }
    };

    return (
        <section className={styles['game-explain']}>
            <Image className={styles['game-bg']} alt="게임 타이틀 이미지" src={gameInfo.image} width={514} height={179}/>
            {/* Game Logo */}
            <div className={styles['game-logos']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                     width={20} height={20} style={{backgroundColor: '#f76754'}}>
                    <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121"></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe" data-original="#f4511e"></path>
                </svg>
            </div>

            {/* 상세 설명 페이지 콘텐츠 */}
            <section className={styles['game-explain-content']}>
                {/* 상세 설명 페이지 헤더 */}
                <div className={styles['game-title-wrapper']}>
                    {/*Sound Vortex Exceed Gear*/}
                    <div className={styles['game-card-title']}>{gameInfo.title}</div>
                    <div className={styles['game-action']}>
                        <SvgIconComponent width={20} height={20} svgPath={'M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z'}/>
                        <ComplexSvgIconComponent width={20} height={20} className={`${styles.feather} ${styles['feather-heart']}`}>
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
                    <OverviewExplainContent title="Genre" subtitle={gameInfo.genre} />
                    <OverviewExplainContent title="Game" subtitle={gameInfo?.title} />
                    <OverviewExplainContent title="가격" subtitle={gameInfo.price} />
                    <OverviewExplainContent title="시간" subtitle={gameInfo?.time} />
                </nav>

                {/* 상세 설명 */}
               {/* <article className={styles['overview-text']}>
                    <div className={styles['overview-text-header']}>개요</div>
                    <div className={styles['overview-text-subheader']}>-</div>
                </article>*/}

                {/* 예약 안내 (data-overview-information.json) */}
                <article className={styles['overview-text']}>
                    {DATA.RESERVATION_INFORMATION.map((info, index) => (
                        <OverviewText key={index} title={info.title} contents={info.contents} />
                    ))}
                </article>

                <div className={styles['overview-move-wrap']}>
                    <label htmlFor="rent" className={styles['overview-input-label']}>
                        <input type="checkbox" name={'rent'} id="rent" onChange={handleCheckboxChange}/>
                        내용<span>(예약 안내)</span>을 숙지했습니다.
                    </label>
                    <Link className={styles['move-rent-link']} href={`/reserve/rent/${gameInfo.series_first}?game=${encodeURIComponent(gameInfo.title)}`} onClick={handleReserveClick}>
                        예약하기
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default OverviewMainSection;