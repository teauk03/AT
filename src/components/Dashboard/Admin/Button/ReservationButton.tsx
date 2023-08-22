'use client'
import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import useRequest from "@/hooks/Fetch/useRequest";
import {ObjectId} from "mongodb";

type ReservationButtonProps = {
    reservationId: ObjectId;
}

const ReservationButton = ({reservationId}: ReservationButtonProps) => {
    const handleReject = useRequest({
        url: '/api/reservation/edit',
        method: 'PUT',
        body: { reservationId, rent_status: '예약거절' },
        onSuccess: (data) => alert('예약이 거절되었습니다.'),
        onFailure: () => alert('예약 거절에 실패했습니다.'),
    });

    const handleAccept = useRequest({
        url: '/api/reservation/edit',
        method: 'PUT',
        body: { reservationId, rent_status: '예약완료' },
        onSuccess: (data) => alert('예약이 완료되었습니다.'),
        onFailure: () => alert('예약 수락에 실패했습니다.'),
    });

    return (
        <div className={styles['reserve-submit-btn']}>
            <button type={"button"} onClick={handleAccept}>수락</button>
            <button type={"button"} onClick={handleReject}>거절</button>
        </div>
    );
};

export default ReservationButton;