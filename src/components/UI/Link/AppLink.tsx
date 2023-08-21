'use client'
import React from 'react';
import Link from "next/link";
import {UI_LINK_COMPONENT} from "@/types/UI";

/* [Link Component] NavbarLink
 * [선택] className - 클래스 이름
 * [필수] href - 이동할 경로
 * [필수] label - Link 내 텍스트
 * [선택] onClick - 클릭 이벤트 */
const AppLink = ({className, href, label, onClick}: UI_LINK_COMPONENT) => {
    return (
        <Link className={className} href={href} onClick={onClick}>
            {label}
        </Link>
    );
};

export default AppLink;