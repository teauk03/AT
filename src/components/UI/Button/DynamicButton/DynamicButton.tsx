'use client'
import React from 'react';
import styles from '@/components/Board/Write/write.module.scss';
import {DYNAMIC_BUTTON_PROPS} from "@/types/UI";

/**
 * DynamicButton 컴포넌트.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성
 * @param {string} props.className - 버튼에 적용할 CSS 클래스. (버튼 색상 결정)
 * Possible values are: 'submit-btn-add', 'submit-btn-delete'... SCSS 정의에 따라 다름.
 * @param {string} props.label - 버튼에 표시되는 레이블.
 * @param {boolean} props.disabled - true 일 경우, 버튼이 비활성화.
 *
 * @example
 * <DynamicButton
 *    className="submit-btn-add"
 *    label="등록"
 *    disabled={false}
 * />
 *
 * @returns {React.Element} 렌더링된 DynamicButton 컴포넌트.
 */
const DynamicButton = ({ className, label, disabled, onClick, type = "button" }: DYNAMIC_BUTTON_PROPS) => {
    const buttonStyle = `${styles['submit-btn']} ${styles[className]}`;

    return (
        <button
            className={buttonStyle}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
};

export default DynamicButton;