import React, {ChangeEvent, useState} from 'react';
import styles from '@/components/Forum/Write/write.module.scss'
import {SLB_FORUM_ITEMS} from "@/data/dataMenuItem";

const ForumWriteSelect = () => {
    /* 개발사 선택 옵션 */
    const manufacturerOptions = [
        'Konami',
        'Namco',
        'ETC'
    ];

    /* 게임사 및 게임 상태 관리 */
    const [
        manufacturer,
        setManufacturer
    ] = useState('Konami');
    const [
        game,
        setGame
    ] = useState('Games');


    /* 게임사 선택 변경 핸들러 */
    const handleManufacturerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setManufacturer(e.target.value);
        setGame('Games');
    };

    /* 게임 선택 변경 핸들러 */
    const handleGameChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGame(e.target.value);
    };

    /* 선택된 게임사에 해당하는 게임 옵션 필터링 */
    const gameOptions = SLB_FORUM_ITEMS.filter(
        item => item.manufacturer === manufacturer
    );


    return (
        <>
            {/* 게임사 선택 드롭다운 */}
            <select className={styles['select-games']} name="manufacturer" value={manufacturer} onChange={handleManufacturerChange}>
                <option value="Attact">Attact</option>
                {manufacturerOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            {/* 게임 선택 드롭다운 */}
            <select className={styles['select-games']} name="game" value={game} onChange={handleGameChange}>
                <option value="Games">Games</option>
                {gameOptions.map((option, index) => (
                    <option key={index} value={option.title}>{option.title}</option>
                ))}
            </select>
        </>
    );
};


export default ForumWriteSelect;