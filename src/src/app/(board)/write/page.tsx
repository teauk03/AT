'use client'
import styles from './write.module.scss'
import {useRouter} from "next/navigation";

import Modal from "@/components/Modal/Modal";
import DynamicButton from "@/components/Button/DynamicButton/DynamicButton";

import useCreatePost from "@/hooks/Board/useCreatePost";
import useModal from "@/hooks/Modal/useModal";
import useCountText from "@/hooks/Board/useCountText";

const Write = () => {
    const SUCCESS_MSG = '글이 성공적으로 작성되었습니다.';
    const ERROR_MSG = '글 작성 중 오류가 발생했습니다. 다시 시도해주세요.';
    const CONFIRM_MSG = '돌아가시겠습니까? 작성한 내용은 삭제됩니다.';

    const router = useRouter()

    /* [Custom Hooks] 모달팝업 커스텀 훅 */
    const {isOpen, openModal, closeModal, modalContent} = useModal();

    /* [Custom Hooks] 타이핑시 카운트 증가 */
    const titleCounter = useCountText(80);


    const {handleNewPostSubmit, isLoading} = useCreatePost({
        onSuccess: () => openModal(SUCCESS_MSG),
        onError: () => openModal(ERROR_MSG)
    });

    /* handleModalSuccess : 등록버튼 클릭 핸들러 (작성 성공) */
    const handleModalSuccess = () => {
        closeModal();
        if (modalContent === SUCCESS_MSG) {
            router.push('/notice');
        }
    }

    /* handleModalClose : 취소버튼 클릭 핸들러 */
    const handleModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // 현재 이벤트의 기본 동작을 중단
        openModal(CONFIRM_MSG);
    }

    /* handleCancelConfirm : 취소 확인버튼 클릭 핸들러 */
    const handleCancelConfirm = () => {
        closeModal();
        router.push('/notice');
    }

    /* handleModalAbort : 모달 취소버튼 클릭 핸들러 */
    const handleModalAbort = () => closeModal();

    return (
        <form className={styles.form} onSubmit={handleNewPostSubmit}>
            <div className={styles.contents}>
                {/* Header */}
                <div className={styles['title-wrapper']}>
                    <input style={{display: 'none'}} name="userName"/>
                    <input
                        className={styles['input-title']}
                        name='title'
                        type='test'
                        placeholder='글 제목'
                        onChange={titleCounter.onTextChanged}
                    />
                    <p className={styles['title-size']}>{titleCounter.textLength} / 80</p>
                </div>

                {/* Main */}
                <textarea
                    className={styles.content}
                    name="content"
                    placeholder="글 내용"
                />
            </div>

            {/* Add & Back Button */}
            <div className={styles['btn-wrapper']}>
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

                {/* 모달 팝업 생성 */}
                {
                    isOpen &&
                    <Modal
                        isOpen={isOpen}
                        onClose={modalContent === '돌아가시겠습니까? 작성한 내용은 삭제됩니다.'? handleCancelConfirm : handleModalSuccess}
                        onAbort={handleModalAbort}
                    >
                        {modalContent}
                    </Modal>
                }
            </div>
        </form>
    )
}

export default Write;