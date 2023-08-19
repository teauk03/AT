'use client'
import React, {useState} from 'react';
import styles from './TimePicker.module.scss';

const TimePicker = () => {
    const timeIntervals = [
        '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30',
        '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30',
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
    ];

    /* 시작 시간과 끝 시간을 분리하여 저장 */
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);

    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleTimeClick = (time: string) => {
        if (selectedTime && endTime) {
            setStartTime(null);
            setEndTime(null);
        } else if (startTime) {
            setEndTime(time);
            setSelectedTime(`${startTime} ~ ${time}`);
        } else {
            setStartTime(time);
        }
    };

    const isActiveTime = (time: string) => {
        if (startTime && endTime) {
            const startIndex = timeIntervals.indexOf(startTime);
            const endIndex = timeIntervals.indexOf(endTime);
            const currentTimeIndex = timeIntervals.indexOf(time);
            return currentTimeIndex >= startIndex && currentTimeIndex <= endIndex;
        }
        return time === startTime || time === endTime;
    }

    return (
        <div className={styles.timepicker}>
            <div className={styles['timepicker-container']}>
                <h1 className={styles['timepicker-title']}>
                    시간을 선택하세요(최소 1시간 ~ 최대 6시간)
                </h1>
                <div className={styles['timepicker-contents']}>
                    <div className={styles['timepicker-am']}>
                        <p className={styles['timepicker-sub-title']}>오전</p>
                        <ul className={styles['timepicker-list']}>
                            {timeIntervals.slice(0, 25).map((time, index) => (
                                <li key={index} className={`${styles['timepicker-list-item']} ${isActiveTime(time) ? styles['timepicker-list-item-active'] : styles['timepicker-list-item-passive']}`} onClick={() => handleTimeClick(time)}>
                                    {time}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['timepicker-pm']}>
                        <p className={styles['timepicker-sub-title']}>오후</p>
                        <ul className={styles['timepicker-list']}>
                            {timeIntervals.slice(25).map((time, index) => (
                                <li key={index} className={`${styles['timepicker-list-item']} ${isActiveTime(time) ? styles['timepicker-list-item-active'] : styles['timepicker-list-item-passive']}`} onClick={() => handleTimeClick(time)}>
                                    {time}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {selectedTime && <p className={styles['result-time']}><span>선택된 시간 : </span> {selectedTime}</p>}
                <button type={'button'} disabled={!selectedTime}>
                    예약시간 선택
                </button>
            </div>
        </div>
    );
};

export default TimePicker;