'use client'
import React, {useState} from 'react';
import styles from "@/components/Reserve/Reserve.module.scss";
import {useSearchParams} from "next/navigation";
import Calendar from "@/components/Reserve/Rent/Calendar/Calendar";
import Link from "next/link";
import TimePicker from "@/components/Reserve/Rent/TimePicker/TimePicker";
import RentModal from "@/components/Reserve/Rent/Modal/RentModal";

const RentContainer = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    /* 쿼리스트링을 사용해 동적 라우팅 : 게임의 타이틀 */
    const searchParams = useSearchParams();
    const game = searchParams ? searchParams.get('game') : null;

    const handleDateChange = (date: Date) => {
        setSelectedDay(date);
    };

    const handleTimeChange = (time: string) => {
        setSelectedTime(time);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 모달 표시
        setShowModal(true);
    };

    console.log(selectedTime)
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>예약하기</span>
                </div>
                <form className={styles.reserveForm} onSubmit={handleSubmit}>
                    {/* 캘린더 */}
                    <Calendar onChange={handleDateChange} />
                    <div className={styles.wrapper}>
                        {/* 타임피커 : 시간선택 */}
                        <TimePicker onChange={handleTimeChange} />
                        <div className={styles['submit-button']}>
                            <Link href={'/reserve/home'} className={styles.button}>돌아가기</Link>
                            <button type="submit" className={styles.button}>예약하기</button>
                        </div>
                    </div>
                </form>
                {showModal && <RentModal selectedDay={selectedDay} selectedTime={selectedTime} />}
            </div>
        </main>
    );
};

export default RentContainer;