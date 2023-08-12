'use client'
import React from 'react';
import {useParams} from "next/navigation";

/* 특정 라우터에 wrap 스타일 제외 */
const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    /* 현재 URL의 동적 파라미터를 가져옴 */
    const params  = useParams();

    /*  problemId 파라미터가 있으면 noWrap를 true로 설정 */
    const NOT_WRAP = params ? !!params.problemId : false;


    return (
        <div className={NOT_WRAP ? '' : 'wrap'}>
            {children}
        </div>
    );
};

export default GlobalLayout;