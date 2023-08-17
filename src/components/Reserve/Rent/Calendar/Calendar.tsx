'use client'
import React, {useState} from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
    /* 년월 상태 관리 */
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(8);

    const weekDays = ['월', '화', '수', '목', '금', '토', '일'];
    const monthDays = 31;
    let dayCounter = 0;

    /* 년월 변경 핸들러 */
    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
            if (month === 12) {
                setYear((prevYear) => prevYear + 1);
            }
        } else {
            setMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
            if (month === 1) {
                setYear((prevYear) => prevYear - 1);
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.calendar}>
                <div className={styles.front}>
                    <div className={styles.currentMonth}>
                        <table className={styles.weeks}>
                            <thead>
                            <tr>
                                {weekDays.map((day) => <th key={day}>{day}</th>)}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={7}>
                                    <div className={styles.swipeArea}>
                                        <button onClick={() => handleSwipe('right')}>←</button>
                                        <span>{year}.{month}</span>
                                        <button onClick={() => handleSwipe('left')}>→</button>
                                    </div>
                                </td>
                            </tr>
                            {[...Array(5)].map((_, weekIndex) => (
                                <tr key={weekIndex}>
                                    {[...Array(7)].map((_, dayIndex) => {
                                        let dayClass = '';
                                        if (dayIndex === 6) dayClass = styles.sunday;
                                        if (dayIndex === 5) dayClass = styles.saturday;
                                        if (weekIndex === 0 && dayIndex < 4) {
                                            return <td key={dayIndex} className={styles.lastMonth}></td>;
                                        }
                                        dayCounter++;
                                        if (dayCounter > monthDays) {
                                            return <td key={dayIndex}></td>;
                                        }
                                        let displayDay = dayCounter;
                                        if (dayCounter < 10) {
                                            displayDay = Number(String(dayCounter).slice(1));
                                        }
                                        return <td key={dayIndex} className={dayClass}>{displayDay}</td>;
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;