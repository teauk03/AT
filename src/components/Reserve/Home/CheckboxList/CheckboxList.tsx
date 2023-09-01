import React from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import {GameNavigation} from "@/types/Reserd";

type CheckboxProps = {
    gameType: string;
    gameList: any[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>, gameType: number) => void;
}

const CheckboxList: React.FC<CheckboxProps> = ({ gameType, gameList, onChange }) => {
    return (
        <div className={styles['game-time']}>
            <div className={styles['game-time-title']}>Konami</div>
            <div className={styles['game-wrapper']}>
                {/* 사이드 체크 박스 */}
                {gameList.map((game: GameNavigation, index: number) => (
                    <div key={index} className={styles['type-container']}>
                        <input
                            className={styles['game-style']}
                            type="checkbox"
                            id={game.id.toString()}
                            onChange={(e) => onChange(e, game.id as number)}
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
    );
};

export default CheckboxList;