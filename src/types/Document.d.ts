import {ObjectId} from "mongodb";

/* [util] getDocsFromDocument Result Type */
interface Docs {
    _id: string | ObjectId;
    title?: string;
    content?: string;
    category?: number;
    device?: number;
    [key: string]: any;
}


/* [Component] DocsItem Props */
export interface DocsItemProps {
    result: Docs[];
}


/* [Components - page] Document */
export interface DocsInputObjectId {
    _id: string;
}


/* 문서 데이터를 정의 (제목, 내용, 문서 분류, 기기 종류) */
export interface DocsData {
    _id: string;
    title: string;
    content: string;
    category: number;
    device: number;
}



/* [Component - props] DocsSection */
export interface DocsSectionProps {
    saveDocsData: DocsData[];
}