import React, { useState } from 'react';
import styles from './RentModal.module.scss';
import useRequest from "@/hooks/Fetch/useRequest";
import {useRouter} from "next/navigation";

interface ModalProps {
    selectedDay: Date | null;
    selectedTime: string | null;
    game: string | null;
}

const RentModal: React.FC<ModalProps> = ({ selectedDay, selectedTime, game }) => {
    const router = useRouter();

    const [showModal, setShowModal] = useState(true);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const handleRequest = useRequest({
        url: '/api/reservation/new',
        method: 'POST',
        body: {
            division_title: game,
            days: selectedDay,
            time: selectedTime,
            date: formattedDate,
            rent_status: '예약대기'
        },
        onSuccess: (data) => {
            setShowModal(false)
            router.push('/reserve/confirm')
        },
        onFailure: (error) => alert('예약신청에 실패했습니다.')
    })

    /* 모달이 숨겨져 있을 경우 아무 것도 렌더링 X */
    if (!showModal) return null;

    return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
                <p className={styles['modal-text']}>선택한 요일: {selectedDay && selectedDay.toLocaleDateString()}</p>
                <p className={styles['modal-text']}>선택한 시간 : {selectedTime}</p>
                <p className={styles['modal-text']}>예약 시간과 요일을 다시 한번 확인해주세요.</p>
                <div className={styles['abort-wrapper']}>
                    <button className={styles['abort-btn']} onClick={() => setShowModal(false)}>취소</button>
                    <button className={styles['success-btn']} onClick={handleRequest}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default RentModal;