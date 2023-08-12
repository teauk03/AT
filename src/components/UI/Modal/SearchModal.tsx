'use client'
import React, {useState} from 'react';
import styles from './Modal.module.scss';
import SearchModalButton from "@/components/UI/Modal/SearchModalButton";

const SearchModal = () => {
    /* Input 포커스 상태 관리 */
    const [
        isInputFocused,
        setIsInputFocused
    ] = useState(false);

    /* Input 포커스 핸들러
     * 사용자가 인풋 필드에 포커스를 맞추면, 상태를 true로 변경하여 테두리 스타일을 활성화 */
    const handleIsFocused = () => setIsInputFocused(true);

    /* Input 블러 핸들러
     * 사용자가 인풋 필드 밖을 클릭하면, 상태를 false로 변경하여 테두리 스타일을 비활성화 */
    const handleBlur = () => setIsInputFocused(false);

    /* 클릭 이벤트 전파를 중지하는 핸들러 */
    const handlePreventClickPropagation = (e: React.MouseEvent) => e.stopPropagation();


    return (
        <>
            <div
                className={`${styles['search-container']} ${isInputFocused ? styles['focused'] : ''}`}
                onClick={handlePreventClickPropagation}
            >
                <div className={styles['search-modal']}>
                    {/* Search Input */}
                    <input
                        className={styles['search-input']}
                        onFocus={handleIsFocused}
                        onBlur={handleBlur}
                        placeholder={'검색 내용을 입력하세요.'}
                        type="text"
                    />

                    {/* Search Button */}
                    <SearchModalButton/>
                </div>
            </div>
        </>
    );
};

export default SearchModal;