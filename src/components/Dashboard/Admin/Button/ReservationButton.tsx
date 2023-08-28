'use client'
import React from 'react';
import styles from "@/components/Dashboard/Admin/Admin.module.scss";
import useRequest from "@/hooks/Fetch/useRequest";
import {useRouter} from "next/navigation";
import {ObjectId} from "mongodb";

type ReservationButtonProps = {
    reservationId: string;
    reservationStatus?: string;
}

const ReservationButton = ({reservationId, reservationStatus}: ReservationButtonProps) => {
    const router = useRouter();
    const handleReject = useRequest({
        url: '/api/reservation/edit',
        method: 'PUT',
        body: { _id: reservationId, rent_status: '예약거절' },
        onSuccess: (data) => {
            alert(`예약이 거절되었습니다.\n${JSON.stringify(data)}`)
            router.refresh();
        },
        onFailure: () => alert('예약 거절에 실패했습니다.')
    });

    const handleAccept = useRequest({
        url: '/api/reservation/edit',
        method: 'PUT',
        body: { _id: reservationId, rent_status: '예약완료' },
        onSuccess: (data) => {
            alert(`예약되었습니다.\n${JSON.stringify(data)}`)
            router.refresh();
        },
        onFailure: () => alert('예약 수락에 실패했습니다.')
    });

    const handleCancel = useRequest({
        url: '/api/reservation/edit',
        method: 'PUT',
        body: { _id: reservationId, rent_status: '예약취소' },
        onSuccess: (data) => {
            alert(`예약이 취소되었습니다.\n${JSON.stringify(data)}`)
            router.refresh();
        },
        onFailure: () => alert('예약 취소에 실패했습니다.')
    });

    const handleDelete = useRequest({
        url: '/api/reservation/delete',
        method: 'POST',
        body: { _id: reservationId },
        onSuccess: (data) => {
            alert(`삭제 되었습니다.\n${JSON.stringify(data)}`)
            router.refresh();
        },
        onFailure: (data) => alert(`요청한 작업도중 에러가 발생했습니다.\n${JSON.stringify(data)}`)
    });

    return (
        <div className={styles['reserve-submit-btn']}>
            {reservationStatus === '예약대기' && (
                <>
                    <button type={"button"} onClick={handleAccept}>수락</button>
                    <button type={"button"} onClick={handleReject}>거절</button>
                </>
            )}
            {reservationStatus === '예약완료' && (
                <>
                    <button type={"button"} onClick={handleCancel}>취소</button>
                    <button type={"button"} onClick={handleReject}>거절</button>
                </>
            )}
            {reservationStatus === '예약거절' && (
                <>
                    <button type={"button"} onClick={handleAccept}>예약</button>
                    <button type={"button"} onClick={handleDelete}>삭제</button>
                </>
            )}
            {reservationStatus === '예약취소' && (
                <>
                    <button type={"button"} onClick={handleDelete}>삭제</button>
                </>
            )}
        </div>
    );
};

export default ReservationButton;