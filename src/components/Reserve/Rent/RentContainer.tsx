'use client'
import React, {useState} from 'react';
import styles from "@/components/Reserve/Reserve.module.scss";
import {useSearchParams} from "next/navigation";
import Calendar from "@/components/Reserve/Rent/Calendar/Calendar";
import Link from "next/link";
import TimePicker from "@/components/Reserve/Rent/TimePicker/TimePicker";
import RentModal from "@/components/Reserve/Rent/Modal/RentModal";
import {UserProfileData} from "@/types/Account";

const RentContainer: React.FC<UserProfileData> = ({ user }) => {
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

    /* 모달 표시 */
    const handleSubmitOpenModal = (event: React.FormEvent) => {
        event.preventDefault();
        setShowModal(true);
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>예약하기</span>
                    <span className={styles.title}>{' > '}</span>
                    <Link href={'/reserve/home'}><span className={styles.title}>{game}</span></Link>
                </div>
                <form className={styles.reserveForm} onSubmit={handleSubmitOpenModal}>
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
                    {showModal &&
                        <RentModal selectedDay={selectedDay} selectedTime={selectedTime} game={game}/>
                    }
                </form>
            </div>
        </main>
    );
};

export default RentContainer;