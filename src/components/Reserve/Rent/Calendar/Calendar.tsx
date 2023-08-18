'use client'
import React, {useState} from 'react';
import styles from './Calendar.module.scss';
import SvgIconComponent from "@/components/SvgIconComponent";

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
            <section className={styles.calendar}>
                {/* 날짜 헤더 부분 (요일과 현재 날짜 표시) */}
                <ul className={styles.header}>
                    <li className={styles['current-date']}>
                        <span>
                        {selectedDate.getFullYear()}.{(selectedDate.getMonth() + 1).toString().padStart(2, '0')}.{selectedDate.getDate().toString().padStart(2, '0')}
                        </span>
                    </li>

                    {/* 요일 */}
                    <li className={styles['week-days']}>
                        {weekDays.map((day, index) => (
                            <div key={day} className={`${styles.days} ${index === 6 ? styles.sunday : index === 5 ? styles.saturday : ''}`}>
                                {day}
                            </div>
                        ))}
                    </li>
                </ul>

                {/* 달력 날짜 부분 (이번 주의 일자 표시) */}
                <div className={styles['month-days']}>
                    {getDaysOfWeek().map((day, index) => (
                        <div key={index} className={styles['month-days-wrap']}>
                            <span className={`${currentWeekStart.getMonth() !== day.getMonth() ? styles.inactive : ''}${selectedDate.getDate() === day.getDate() && selectedDate.getMonth() === day.getMonth() && selectedDate.getFullYear() === day.getFullYear() ? styles.selectedDate : ''}${index === 6 ? styles.sunday : index === 5 ? styles.saturday : ''}`} onClick={() => handleDateClick(day)}>
                                {day.getDate()}
                            </span>
                            {day.getDate() === now.getDate() && day.getMonth() === now.getMonth() && day.getFullYear() === now.getFullYear() && <span className={styles.today}>오늘</span>}
                        </div>
                    ))}
                </div>

                {/* 이전 다음 버튼 */}
                <div className={styles['arrow-wrap']}>
                    <button className={styles.arrow} onClick={() => moveWeek('right')}>
                        <SvgIconComponent width={25} height={25} svgPath={'M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9' +
                            ' 0 11-18 0 9 9 0 0118 0z'} />
                    </button>
                    <button className={styles.arrow} onClick={() => moveWeek('left')}>
                        <SvgIconComponent width={25} height={25} svgPath={'M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Calendar;