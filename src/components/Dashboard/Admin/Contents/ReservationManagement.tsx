'use client'
import React, {useState} from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import {ADMIN_MANAGEMENT_RESERVATION_TYPE} from "@/types/Account";
import formatDate from "@/utils/formatDate";
import ReservationButton from "@/components/Dashboard/Admin/Button/ReservationButton";
import {ObjectId} from "mongodb";

type RESERVATION_PROPS_TYPE = {
    title: string;
    results: ADMIN_MANAGEMENT_RESERVATION_TYPE[];
}

type ReservationButtonProps = {
    _id: ObjectId;
    onStatusChange: () => void; // 콜백 함수
}

const ReservationContainer = ({title, results}: RESERVATION_PROPS_TYPE) => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({}); // 객체 리터럴 타입 사용

    /* 필터 변경 (상태, 핸들러) */
    const [filter, setFilter] = useState('예약대기')
    const handleFilterChange = (newFilter: string) => setFilter(newFilter);
    const filteredResults = results.filter(item => item.rent_status === filter)

    const handleReservationStatusChange = () => {
        // 예약 상태가 변경되면 수행할 로직 (예: 예약 데이터 다시 가져오기)
    };

    /* 렌더링 코드 */
    return (
        <>
            <div className={styles['reserve-nav']}>
                <div className={styles['nav-item']}>
                    <button type={"button"} onClick={()=> handleFilterChange('예약대기')}>
                        예약대기
                    </button>
                </div>
                <div className={styles['nav-item']}>
                    <button type={"button"} onClick={()=> handleFilterChange('예약완료')}>
                        예약완료
                    </button>
                </div>
                <div className={styles['nav-item']}>
                    <button type={"button"} onClick={()=> handleFilterChange('예약거절')}>
                        예약거절
                    </button>
                </div>
            </div>
            <section className={styles['grid-container']}>
                <article className={styles['admin-article']}>
                    <h1>{title}</h1>
                    <div className={styles.reserve}>
                        <div className={styles['reserve-inner']}>
                            {filteredResults.map((item, index) => (
                                <div key={index} className={styles['reserve-list']}>
                                    <div className={styles['reserve-item']}>
                                        <span>{item.name}</span>
                                        <span>{item.division}</span>
                                        <span>{item.division_title}</span>
                                        <span>{formatDate(item.days)}</span>
                                        <span>{item.time}</span>
                                    </div>
                                    <ReservationButton reservationId={item._id} onStatusChange={handleReservationStatusChange} />
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default ReservationContainer;