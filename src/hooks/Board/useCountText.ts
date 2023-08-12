'use client'
import { useState, useCallback, ChangeEvent } from 'react';
import {TextCountHooks} from '@/types/Borad';

/**
 * 입력된 텍스트의 길이를 계산하는 훅
 * @param {number} maxLength - 텍스트의 최대 길이
 * @returns {Object} 입력된 텍스트의 길이, 텍스트를 설정하는 함수, 텍스트 길이를 반환하는 함수
 */
const useCountText = (maxLength: number): TextCountHooks => {
    const [text, setText] = useState<string>('');
    const onTextChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        if (newText.length <= maxLength) {
            setText(newText);
        }
    }, [maxLength]);

    return {
        textLength: text.length,
        setText,
        onTextChanged,
    };
};

export default useCountText;