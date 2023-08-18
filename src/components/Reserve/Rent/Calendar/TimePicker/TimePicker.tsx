'use client'
import React, { useState } from 'react';

const TimePicker = () => {
    const timeIntervals = [
        '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30',
        '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
        '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30'
    ];

    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <div>
            <p>시간을 선택하세요 최소 1시간 - 최대 6시간 이용가능</p>
            <div>
                <p>오전</p>
                {timeIntervals.slice(0, 12).map((time, index) => (
                    <button key={index} onClick={() => handleTimeClick(time)}>{time}</button>
                ))}
            </div>
            <div>
                <p>오후</p>
                {timeIntervals.slice(12).map((time, index) => (
                    <button key={index} onClick={() => handleTimeClick(time)}>{time}</button>
                ))}
            </div>
            {selectedTime && <p>선택된 시간: {selectedTime}</p>}
            <button disabled={!selectedTime}>예약시간 선택</button>
        </div>
    );
};

export default TimePicker;