'use client'
import styles from '@/components/Board/Write/write.module.scss'
import {FormContainerProps} from "@/types/Borad";
import usePlaceholder from "@/hooks/usePlaceholder";
import ForumWriteSelect from "@/components/Board/Write/ForumWriteSelect";

const FormContent: React.FC<FormContainerProps> = ({initialTitle = '', initialContent = '', onSubmit, onTitleChange, textLength = 0, buttons}) => {
    /* [input, textarea] placeholder 상태관리 */
    const {
        showPlaceholder: showTitlePlaceholder,
        handleFocus: handleTitleFocus,
        handleBlur: handleTitleBlur
    } = usePlaceholder();

    const {
        showPlaceholder: showContentPlaceholder,
        handleFocus: handleContentFocus,
        handleBlur: handleContentBlur
    } = usePlaceholder();


    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.contents}>
                <h1 className={styles.title}>게시글 작성</h1>
                {/* 토픽 선택 */}
                <div className={styles['board-select-wrap']}>
                    <ForumWriteSelect/>
                </div>
                {/* 제목 */}
                <div className={styles['board-title-wrap']}>
                    <input
                        className={styles['board-input-title']}
                        name="title"
                        type="text"
                        placeholder={showTitlePlaceholder ? ' 제목을 입력해주세요.' : ''}
                        defaultValue={initialTitle}
                        onChange={onTitleChange}
                        onFocus={handleTitleFocus}
                        onBlur={handleTitleBlur}
                    />
                    <p className={styles['board-title-count']}>
                        {textLength} / 30
                    </p>
                </div>

                {/* 내용 */}
                <textarea
                    className={styles['board-content']}
                    name="content"
                    placeholder={showContentPlaceholder ? `※ 게시판 용도와 무관하거나 아래 내용이 포함된 경우는 사전 안내없이 삭제/제재됩니다.\n\n- 욕설, 상대 비방 등 타인의 명예를 훼손하는게시물\n- 불쾌감을 줄 수 있는 이미지나 내용, 저작권에 위배되는 게시물\n- 개인정보 노출이 있거나 현금 거래 시도 등에 준하는 행위\n- 공식 안내되지 않은 허위 정보로 혼란을 초래하거나 어택운영에 심각한 악영향을 끼칠 수 있는 게시물` : ''}
                    defaultValue={initialContent}
                    onFocus={handleContentFocus}
                    onBlur={handleContentBlur}
                />
            </div>

            {/* 버튼 */}
            <div className={styles['btn-wrapper']}>
                {buttons}
            </div>
        </form>
    )
}

export default FormContent;