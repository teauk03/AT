'use client'
import { useState, useCallback } from 'react';


/* [Custom Hook] 모달 팝업 열림/닫힘 상태 제어 & 모달에 표시할 내용도 관리 */
const useModal = (initialValue = false) => {
    /* isOpen : 모달이 열려 있는지 아닌지 결정 */
    const [
        isOpen,
        setIsOpen
    ] = useState(initialValue);


    /* modalContent : 모달에 표시할 내용 보관 */
    const [
        modalContent,
        setModalContent
    ] = useState('');


    /* openModal : 모달을 열고 그 내용을 설정 */
    const openModal = useCallback((message: string) => {
        setModalContent(message);
        setIsOpen(true);
    }, []);


    /* closeModal : 모달을 닫고 그 내용을 지움 */
    const closeModal = useCallback(() => {
        setIsOpen(false);
        setModalContent('');
    }, []);

    return { isOpen, openModal, closeModal, modalContent };
};

export default useModal;