import React from 'react';
import styles from '@/components/Board/Write/write.module.scss'
import {useSession} from "next-auth/react";
import useSelection from "@/hooks/Board/useSelection";

const ForumWriteSelect = () => {
    /* 어드민 여부 확인 */
    const { data: session } = useSession();
    const isAdmin = session?.user?.role === 'admin';
    const manufacturerOptions = ['Konami', 'Namco', 'ETC'];
    const ADMIN_USER = ['공지사항', '이벤트'];

    const {manufacturer, game, gameOptions, handleManufacturerChange, handleGameChange, announcement, setAnnouncement
    } = useSelection();


    return (
        <>
            {isAdmin ? (
                <>
                    <select className={styles['select-games']} name="division_title">
                        <option value="Admin">Admin Menu</option>
                    </select>
                    <select className={styles['select-games']} name="division" value={announcement} onChange={(e) => setAnnouncement(e.target.value)}>
                        <option value="Admin">선택하세요.</option>
                        {ADMIN_USER.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </>
            ) : (
                <>
                    {/* 게임사 선택 드롭다운 */}
                    <select className={styles['select-games']} name="division_title" value={manufacturer} onChange={handleManufacturerChange}>
                        <option value="Company">선택하세요.</option>
                        {manufacturerOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>

                    {/* 게임 선택 드롭다운 */}
                    <select className={styles['select-games']} name="division" value={game} onChange={handleGameChange}>
                        <option value="Games">Games</option>
                        {gameOptions.map((option, index) => (
                            <option key={index} value={option.title}>{option.title}</option>
                        ))}
                    </select>
                </>
            )}
        </>
    );
};


export default ForumWriteSelect;