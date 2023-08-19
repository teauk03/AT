import React, { useState } from 'react';
import styles from './RentModal.module.scss';

interface ModalProps {
    selectedDay: Date | null;
    selectedTime: string | null;
}

const RentModal: React.FC<ModalProps> = ({ selectedDay, selectedTime }) => {
    const [showModal, setShowModal] = useState(true);
    console.log('selectedDay : ', selectedDay)
    console.log('selectedTime : ', selectedTime)
    const handleConfirm = () => {
        // 여기서 폼 전송 로직을 추가합니다.
    };

    if (!showModal) return null; // 모달이 숨겨져 있을 경우 아무 것도 렌더링하지 않습니다.

    return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
                <p className={styles['modal-text']}>선택한 요일: {selectedDay && selectedDay.toLocaleDateString()}</p>
                <p className={styles['modal-text']}>선택한 시간 : {selectedTime}</p>
                <p className={styles['modal-text']}>예약 시간과 요일을 다시 한번 확인해주세요.</p>
                <div className={styles['abort-wrapper']}>
                    <button className={styles['abort-btn']} onClick={() => setShowModal(false)}>취소</button>
                    <button className={styles['success-btn']} onClick={handleConfirm}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default RentModal;