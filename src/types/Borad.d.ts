import {ObjectId} from "mongodb";
import React, {ChangeEvent} from "react";
import exp from "constants";

/* [util] getPostsFromForum Result Type */
interface Post {
    _id: string | ObjectId;
    userName?: string;
    title?: string;
    content?: string;
    [key: string]: any;
}


/* [Component] ForumItem Props */
export interface NoticeItemProps {
    result: Post[],
    totalPosts: number,
    page: number,
    //searchQuery: string
}


/* [Custom Hook] useCountText.ts */
export interface TextCountHooks {
    textLength: number;
    setText: React.Dispatch<React.SetStateAction<string>>;
    onTextChanged: (event: ChangeEvent<HTMLInputElement>) => void;
}


/* [Custom Hook] useCreatePost.ts
 * 게시글 생성에 사용되는 옵션 정의
 * (성공 or 에러 발생시 실행되는 콜백 함수) */
export interface  CreatePostOptions {
    onSuccess?: (message: string) => void;
    onError?: (error: Error) => void;
}

/* 서버 응답 인터페이스 */
export interface ServerResponse {
    error?: string;
}

/* 포스트 데이터를 정의 (제목, 내용, 사용자 이름) */
export interface PostData {
    title: string;
    content: string;
    userName: string;
    division_title: string;
    division: string;
}


/* [Component] EditPost */
export interface EditIdProps {
    params: {
        id: string;
    }
}


/* [Component] FormContainer */
export interface FormContainerProps {
    initialTitle?: string;
    initialContent?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    textLength?: number;
    buttons: React.ReactNode;
}

/* api/post/nes - handler */
export interface IDivisionMapping {
    [key: string]: string;
}

/* 검색 인터페이스 */
export interface MongoPost {
    _id: string;
    userName: string;
    title: string;
    content: string;
    division_title: string | null;
    division: string | null;
}

export interface pathTypeProps {
    path: string;
    href?: string;
}