'use client'
import axios from "axios";
import React, {useState} from "react";
import FormContent from "@/components/Board/Write/FormContent";
import DynamicButton from "@/components/UI/Button/DynamicButton/DynamicButton";
import Modal from "@/components/UI/Modal/Modal";
import {useRouter} from "next/navigation";

interface EditPostContainerProps {
    initialTitle: string;
    initialContent: string;
    postId: string;
}

const EditPostContainer: React.FC<EditPostContainerProps> = ({initialTitle, initialContent, postId}) => {
    const router = useRouter();

    const [
        isLoading,
        setIsLoading
    ] = useState<boolean>(false);

    const [isOpen,
        setIsOpen
    ] = useState<boolean>(false);

    const [modalContent,
        setModalContent
    ] = useState<string>('');


    const handleModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(true);
        setModalContent('돌아가시겠습니까? 작성한 내용은 삭제됩니다.');
    };

    const handleModalAbort = () => {
        setIsOpen(false);
    };

    const handleModalSuccess = () => {
        setIsOpen(false);
    };

    const handleCancelConfirm = () => {
        setIsOpen(false);
        router.push('/forum')
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const postId = formData.get('_id') as string;

        try {
            setIsLoading(true);

            const response = await axios.post('/api/post/edit', {
                title, content, _id: postId,
            });

            if (response.status !== 200) {
                throw new Error('Failed to edit post');
            }

            setModalContent('Post successfully edited!');
            setIsOpen(true);

            /*After saving, redirect to the forum or the edited post's page*/
            router.push('/forum')

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <FormContent
                initialTitle={initialTitle}
                initialContent={initialContent}
                onSubmit={handleSubmit}
                buttons={
                    <>
                        <DynamicButton
                            className={'submit-btn-delete'}
                            label={'취소'}
                            type="button"
                            onClick={handleModalClose} // 취소 버튼 클릭시 실행할 함수
                            disabled={isLoading} // 로딩 중이면 버튼 비활성화
                        />
                        <input style={{display: "none"}} name="_id" defaultValue={postId}/>
                        <DynamicButton
                            className={'submit-btn-add'}
                            label={'수정'}
                            type="submit"
                            disabled={isLoading} // 로딩 중이면 버튼 비활성화
                        />
                    </>
                }
            />

            {/* 모달 팝업 생성 */}
            {isOpen &&
                <Modal
                    isOpen={isOpen}
                    onClose={modalContent === '돌아가시겠습니까? 작성한 내용은 삭제됩니다.' ? handleCancelConfirm : handleModalSuccess}
                    onAbort={handleModalAbort}
                >
                    {modalContent}
                </Modal>
            }
        </>
    );
}

export default EditPostContainer;