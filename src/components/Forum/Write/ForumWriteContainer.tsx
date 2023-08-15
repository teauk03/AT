'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import useModal from "@/hooks/Modal/useModal";
import useCountText from "@/hooks/Board/useCountText";
import useCreatePost from "@/hooks/Board/useCreatePost";
import DynamicButton from "@/components/UI/Button/DynamicButton/DynamicButton";
import Modal from "@/components/UI/Modal/Modal";
import FormContent from "@/components/Forum/Write/FormContent";


const ForumWriteContainer = () => {
    /* 변수 or 상수 선언 */
    const CONFIRM_MSG = '돌아가시겠습니까? 작성한 내용은 삭제됩니다.';
    const router = useRouter()

    /* [Custom Hooks] useModal : 모달팝업 */
    const {
        isOpen, openModal, closeModal, modalContent
    } = useModal();


    /* [Custom Hooks] useCountText : 타이핑시 카운트 증가 */
    const titleCounter = useCountText(80);


    /* [Custom Hook] useCreatePost - 게시글 등록 기능
     * - handleNewPostSubmit : 게시글을 등록하는 함수
     * - isLoading : 게시글 등록 요청시 로딩상태 나타내는 변수
     * [CallBack Fn]
     * onSuccess : 게시글 등록이 성공했을 때 실행되는 함수로 성공 메시지를 담은 모달 출력.
     * onError: 게시글 등록이 실패했을 때 실행되는 함수로 오류 메시지를 담은 모달 출력. */
    const {handleNewPostSubmit, isLoading} = useCreatePost({
        onSuccess: (message) => openModal(message),
        onError: (error) => openModal(error.message)
    })

    /* [Function] handleModalSuccess : 등록버튼 클릭 핸들러 (작성 성공) */
    const handleModalSuccess = () => {
        closeModal();
        if (modalContent) {
            router.push('/forum');
        }
    }

    /* [Function] handleModalClose : 취소버튼 클릭 핸들러 */
    const handleModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // 현재 이벤트의 기본 동작을 중단
        openModal(CONFIRM_MSG);
    }

    /* [Function] handleCancelConfirm : 취소 확인버튼 클릭 핸들러 */
    const handleCancelConfirm = () => {
        closeModal();
        router.push('/forum');
    }

    /* [Function] handleModalAbort : 모달 취소버튼 클릭 핸들러 */
    const handleModalAbort = () => closeModal();


    /* [return] 렌더링 로직 */
    return (
        <>
            <FormContent
                onSubmit={handleNewPostSubmit}
                onTitleChange={titleCounter.onTextChanged}
                textLength={titleCounter.textLength}
                buttons={
                    <>
                        <DynamicButton
                            className={'submit-btn-delete'}
                            label={'취소'}
                            type="button"
                            onClick={handleModalClose}
                            disabled={isLoading}
                        />
                        <DynamicButton
                            className={'submit-btn-add'}
                            label={'등록'}
                            type="submit"
                            disabled={isLoading}
                        />
                    </>
                }
            />

            {/* 모달 팝업 생성 */}
            {
                isOpen &&
                <Modal
                    isOpen={isOpen}
                    onClose={modalContent === '돌아가시겠습니까? 작성한 내용은 삭제됩니다.' ? handleCancelConfirm : handleModalSuccess}
                    onAbort={handleModalAbort}
                >
                    {modalContent}
                </Modal>
            }
        </>
    )
};

export default ForumWriteContainer;