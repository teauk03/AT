import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import GAME_NAVIGATION from '@/data/Game/data-game-navigation.json';
import {GameNavigation} from "@/types/Reserd";

const ReserveLeftNavbar = () => {
    const GAME_NAVIGATION_JSON = JSON.stringify(GAME_NAVIGATION);
    const PARSED_GAME_LIST = JSON.parse(GAME_NAVIGATION_JSON);

    /* [KONAMI] 사이드 체크 박스 */
    const KONAMI_ASIDE = () => (
        <div className={styles['game-time']}>
            <div className={styles['game-time-title']}>Konami</div>
            <div className={styles['game-wrapper']}>
                {/* 사이드 체크 박스 */}
                {PARSED_GAME_LIST.GAME_KONAMI.map((game: GameNavigation, index: number) => (
                    <div key={index} className={styles['type-container']}>
                        <input
                            className={styles['game-style']}
                            type="checkbox"
                            id={game.id.toString()}
                        />
                        <label htmlFor={game.id.toString()}>
                            {game.label}
                        </label>
                        <span className={styles['game-number']}>
                            {game.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )

    /* [NAMCO] 사이드 체크 박스 */
    const NAMECO_ASIDE = () => (
        <div className={styles['game-time']}>
            <div className={styles['game-time-title']}>Namco</div>
            <div className={styles['game-wrapper']}>
                {PARSED_GAME_LIST.GAME_NAMCO.map((game: GameNavigation, index: number) => (
                    <div key={index} className={styles['type-container']}>
                        <input
                            type="checkbox"
                            id={game.id.toString()}
                            className={styles['game-style']}
                        />
                        {/*checked={game.checked}*/}
                        <label htmlFor={game.id.toString()}>
                            {game.label}
                        </label>
                        <span className={styles['game-number']}>
                            {game.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )

    /* [ETC] 사이드 체크 박스 */
    const ETC_ASIDE = () => (
        <div className={styles['game-time']}>
            <div className={styles['game-time-title']}>ETC</div>
            <div className={styles['game-wrapper']}>
                {PARSED_GAME_LIST.GAME_ETC.map((game: GameNavigation, index: number) => (
                    <div key={index} className={styles['type-container']}>
                        <input
                            type="checkbox"
                            id={game.id.toString()}
                            className={styles['game-style']}
                        />
                        <label htmlFor={game.id.toString()}>
                            {game.label}
                        </label>
                        <span className={styles['game-number']}>
                            {game.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )

    /* Result */
    return (
        <aside className={styles['search-type']}>
            {KONAMI_ASIDE()}
            {NAMECO_ASIDE()}
            {ETC_ASIDE()}
        </aside>
    );
};

export default ReserveLeftNavbar;