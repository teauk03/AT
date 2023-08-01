import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAbort?: () => void;
    children: React.ReactNode;
}

const Modal = ({isOpen, onClose, onAbort, children}: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
        >
            <div className={styles['modal-content']}>
                <p className={styles['modal-text']}>
                    {children}
                </p>
                {/* 취소 버튼 클릭시 확인 & 취소 노출, 등록 버튼 클릭시 확인 노출 */}
                {
                    (children === '돌아가시겠습니까? 작성한 내용은 삭제됩니다.') ?
                        <>
                            <div className={styles['abort-wrapper']}>
                                <button className={styles['abort-btn']} onClick={onAbort}>취소</button>
                                <button className={styles['success-btn']} onClick={onClose}>확인</button>
                            </div>
                        </> :
                        <button onClick={onClose}>확인</button>
                }
            </div>
        </div>
    );
};

export default Modal;