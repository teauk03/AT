'use client'
import React, {useState} from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
    const weekDays = ['월', '화', '수', '목', '금', '토', '일'];

    // 현재 주의 시작 날짜 설정
    const now = new Date();
    const dayOfWeek = now.getDay();
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek);

    // 현재 선택된 날짜 설정
    const [selectedDate, setSelectedDate] = useState(now);

    // 현재 주의 일자를 가져오는 함수
    const getDaysOfWeek = () => {
        const daysOfWeek = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(currentWeekStart.getFullYear(), currentWeekStart.getMonth(), currentWeekStart.getDate() + i);
            daysOfWeek.push(day);
        }
        return daysOfWeek;
    };

    // 주를 이동하는 함수
    const moveWeek = (direction: 'left' | 'right') => {
        const newWeekStart = new Date(currentWeekStart.getFullYear(), currentWeekStart.getMonth(), currentWeekStart.getDate() + (direction === 'left' ? 7 : -7));
        setCurrentWeekStart(newWeekStart);
        setSelectedDate(newWeekStart);
    };

    // 날짜 클릭 처리 함수
    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div className={styles.container}>
            <div className={styles.calendar}>
                {/* 날짜 헤더 부분 (요일과 현재 날짜 표시) */}
                <ul className={styles.header}>
                    <li className={styles['current-date']}>
                        {selectedDate.getFullYear()}.{(selectedDate.getMonth() + 1).toString().padStart(2, '0')}.{selectedDate.getDate().toString().padStart(2, '0')}
                    </li>

                    {/* 요일 */}
                    <li className={styles['week-days']}>
                        {weekDays.map((day, index) => (
                            <div key={day} className={`${index === 6 ? styles.sunday : index === 5 ? styles.saturday : ''}`}>
                                {day}
                            </div>
                        ))}
                    </li>
                </ul>

                {/* 달력 날짜 부분 (이번 주의 일자 표시) */}
                <div className={styles.monthDays}>
                    <button className={styles.arrow} onClick={() => moveWeek('right')}>←</button>
                    {getDaysOfWeek().map((day, index) => (
                        <span key={index} className={`
                        ${currentWeekStart.getMonth() !== day.getMonth() ? styles.inactive : ''}
                        ${selectedDate.getDate() === day.getDate() ? styles.selected : ''}
                        ${index === 6 ? styles.sunday : index === 5 ? styles.saturday : ''}
                        `} onClick={() => handleDateClick(day)}>
                            {day.getDate()}
                        </span>
                    ))}
                    <button className={styles.arrow} onClick={() => moveWeek('left')}>→</button>
                </div>
            </div>
        </div>
    );
};

export default Calendar;