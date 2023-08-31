'use client'

import React, {useState} from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import Image from "next/image";
import Link from "next/link";
import ReserveHeader from "@/components/Reserve/Home/ReserveHeader";
import CheckboxList from "@/components/Reserve/Home/CheckboxList/CheckboxList";
import GAME_CARDS from "@/data/Game/data-game-card.json";
import GAME_NAVIGATION from "@/data/Game/data-game-navigation.json";
import {GameCards} from "@/types/Reserd";
import useCustomRouter from "@/hooks/useCustomRouter";

const ReserveContents = () => {
    /* 유저가 선택한 게임 상태 */
    const [
        selectGames,
        setSelectGames
    ] = useState<number[]>([]);
    console.log('ReserveContents selectGames :', selectGames);

    /* 쿼리스트링에서 검색값 가져오기 */
    const { query } = useCustomRouter();
    const searchTerm = String (query.q || "");
    console.log('ReserveContents searchTerm :', searchTerm)

    /* 가져온 검색값을 기반으로 게임 목록 필터링 */
    const filteredGames = GAME_CARDS.ITEMS.filter(game => {
        // 체크박스 필터링
        if (selectGames.length > 0 && !selectGames.includes(game.game_id)) {
            return false;
        }

        // 검색어 필터링
        if (searchTerm.trim() !== "" && !game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }

        return true;
    })
    console.log('filteredGames :', filteredGames)

    const GAME_NAVIGATION_JSON = JSON.stringify(GAME_NAVIGATION);
    const PARSED_GAME_LIST = JSON.parse(GAME_NAVIGATION_JSON);


    /**
     * 체크박스의 체크 유무에 따라 게임 타입을 selectGames 상태에 추가하거나 제거하는 함수
     * @param e - 체크박스의 change 이벤트 객체
     * @param gameType - 체크박스와 연결된 게임 타입의 번호
     */
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, gameType: number) => {
        // 체크박스 체크시 : setSelectGames 함수를 사용해 selectGames 상태 업데이트
        if (e.target.checked) {
            setSelectGames(prevState => [...prevState, gameType]);
            console.log('handleCheckboxChange: ', selectGames)
        // 체크 해제시 : 이전상태(prevState)를 가져와서 filter함수를 사용해 선택한 게임 타입을 제외한 새 배열 반환
        } else {
            setSelectGames(prevState => prevState.filter(type => type !== gameType));
            console.log('!handleCheckboxChange: ', selectGames)
        }
    }


    /* 렌더링 */
    return (
        <section className={styles['main-container']}>
            {/* aside - 사이드 메뉴 */}
            <aside className={styles['search-type']}>
                <CheckboxList
                    gameType={"Konami"}
                    gameList={PARSED_GAME_LIST.GAME_KONAMI}
                    onChange={handleCheckboxChange}
                />
                <CheckboxList
                    gameType={"Namco"}
                    gameList={PARSED_GAME_LIST.GAME_NAMCO}
                    onChange={handleCheckboxChange}
                />
                <CheckboxList
                    gameType={"ETC"}
                    gameList={PARSED_GAME_LIST.GAME_ETC}
                    onChange={handleCheckboxChange}
                />
            </aside>
            {/* section - 메인 컨텐츠 아이템 섹션 */}
            <section className={styles['searched-games']}>
                {/* header - 예약 헤더 */}
                <ReserveHeader/>
                {/* article - 예약 리스트 */}
                <article className={styles['game-cards']}>
{/*
                    {GAME_CARDS.ITEMS.filter(game => selectGames.length === 0 || selectGames.includes(game.game_id)).map((game: GameCards, index: number) => (
*/}
                    {filteredGames.map((game: GameCards, index: number) => (
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
                                <Link className={`${styles['search-buttons']} ${styles['card-buttons']}`} href={`/reserve/overview?game=${encodeURIComponent(game.title)}`}>예약하기</Link>
                                <Link className={`${styles['search-buttons']} ${styles['card-buttons-msg']}`} href={'/support'}>문의하기</Link>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </section>
    );
};

export default ReserveContents;