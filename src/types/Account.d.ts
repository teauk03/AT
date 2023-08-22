import {ObjectId} from "mongodb";
/* [Basic Info] UserAccount Component
 * id - 계정 세부 정보 고유 식별자
 * label - 계정 세부 정보 라벨
 * value - 계정 세부 정보 값
 * disabled - 계정 세부 정보가 비활성화 되었는지 여부
 * type - 계정 세부 정보 타입 ( string : 임시 타입 ) */
export interface AccountDetail {
    id: number;
    title?: string;
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
    user: UserData,
    accountData: AccountDetail[],
}

export interface UserProfileData {
    user: UserData;
}

/* Admin */
export interface ADMIN_MANAGEMENT_POSTS_TYPE {
    _id: ObjectId;
    userName: string;
    title: string;
    content: string;
}

/* User */
export interface ADMIN_MANAGEMENT_USERS_TYPE {
    _id: ObjectId;
    name: string;
    user_status: string;
    subscription: string;
}

export interface ADMIN_MANAGEMENT_RESERVATION_TYPE {
    _id: ObjectId;
    user_id: ObjectId;
    name: string;
    division: string;
    division_title: string;
    time: string;
    days: string;
}