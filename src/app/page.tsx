import React from "react";
import styles from './page.module.scss';
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";
import MAIN_PAGE from "@/data/data-index-page.json";
import GAME_CARD from '@/data/Game/data-game-card.json';
import Link from "next/link";
import Image from "next/image";
import ToggleMenubar from "@/components/UI/Nav/MenuNavigation/ToggleMenubar";

const Home = (): JSX.Element => {
    const MenuNavbarProps = [
        {label:"대표 게임"},
        {label:"인기 게임"},
        {label:"새로운 게임"}
    ]

    return (
        <>
            <GlobalNavbarComponent/>
            <main className={styles.main}>
                <section className={styles['full-page-scroll']}/>
                <div className={styles.contents}>
                    {/* 게임 카드 (대표게임, 인기게임, 새로운게임) */}
                    <section className={styles.games}>
                        <div className={styles['games-wrapper']}>
                            <ul className={styles['swiper-wrapper']}>
                                <ToggleMenubar props={MenuNavbarProps}/>
                            </ul>
                            <div className={styles['games-card']}>
                                {/* 3x3 그리드 게임 카드 */}
                                {GAME_CARD.ITEMS.slice(0,6).map((item, index) => (
                                    <div className={styles['games-item']} key={index}>
                                        <Image className={styles.gameImage} src={item.image} width={200} height={30} alt="게임 이미지"  />
                                        <p className={styles.gameTitle}>{item.title}{index + 1}</p>
                                        <Link href={`/game-detail/${index}`}>자세히 보기</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 메뉴 바로가기 */}
                    <section className={styles['community-section']}>
                        <div className={styles['community-wrap']}>
                            {MAIN_PAGE.ELEMENT.map((item, index) => (
                                <div className={`${styles.comunity} ${item.title === '이벤트' ? styles['event-item'] : ''}`} key={index}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.description}>{item.description}</p>
                                    <Link href={`${item.route}`} className={styles['community-link']}>{item.title} 바로가기</Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <FooterClientComponent/>
        </>
    )
}

export default Home;