import {ObjectId} from "mongodb";
import React from "react";

/* [Basic Info] UserAccount Component
 * id - 계정 세부 정보 고유 식별자
 * label - 계정 세부 정보 라벨
 * value - 계정 세부 정보 값
 * disabled - 계정 세부 정보가 비활성화 되었는지 여부
 * type - 계정 세부 정보 타입 ( string : 임시 타입 ) */
export interface AccountDetail {
    id: number;
    label: string;
    value: string;
    disabled: boolean;
    type: 'text' | 'paragraph' | string;
}


/* 사용자의 데이터. */
export interface UserData {
    _id: ObjectId;
    name: string;
    email: string;
    birth: string;
    summary?: string;
    github?: string;
    website?: string;
    technicalSkills?: string;
    work?: string;
    education?: string;
    lastAccess?: string;
    [key: string]: string | ObjectId | undefined;
}


/* 사용자 데이터 컴포넌트의 속성.
 * accountDetails - 사용자의 계정 세부 정보 */
export interface UserDataProps {
    user: UserData;
    accountDetails: AccountDetail[];
}


/* [Component] AccountDetailInput
 * detail - 현재 출력하려는 계정 정보 세부 항목
 * index - 현재 출력하려는 계정 정보 세부 항목의 인덱스
 * handleInputChange - 사용자 입력 처리 함수
 * editActiveId - 현재 편집 중인 세부 항목의 id */
export interface AccountDetailInputProps {
    detail: AccountDetail;
    index: number;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    editActiveId: number | null;
}


/* [Component] AccountDetailActionsProps
 * detail - 현재 출력하려는 계정 정보 세부 항목
 * index - 현재 출력하려는 계정 정보 세부 항목의 인덱스
 * editActiveId - 현재 편집 중인 세부 항목의 id
 * handleInfoSaveClick - 세부 항목의 정보를 저장하는 함수
 * setEditActiveId - 편집 중인 세부 항목의 id를 설정하는 함수 */
export interface AccountDetailActionsProps {
    detail: AccountDetail;
    index: number;
    editActiveId: number | null;
    handleInfoSaveClick: (detail: AccountDetail, index: number) => Promise<void>;
    setEditActiveId: React.Dispatch<React.SetStateAction<number | null>>;
}


/* [Component] AccountDetails
 * updatedAccountDetails - 계정 세부 정보 배열
 * handleInputChange - Input 변경 이벤트 핸들러
 * handleInfoSaveClick - 정보 저장 클릭 이벤트 핸들러
 * setEditActiveId - 편집 중인 세부 항목의 id 설정 함수
 * editActiveId - 현재 편집 중인 세부 항목의 id */
export interface AccountDetailsProps {
    updatedAccountDetails: AccountDetail[];
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    handleInfoSaveClick: (detail: AccountDetail, index: number) => Promise<void>;
    setEditActiveId: React.Dispatch<React.SetStateAction<number | null>>;
    editActiveId: number | null;
}