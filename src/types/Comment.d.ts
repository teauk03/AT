/* [Custom Hook] useCommentAPI */
export interface CommentData {
    _id: string;
    author: string;
    name: string;
    content: string;
    parent: string;
}


/* [Components - page] Comment */
export interface CommentInputObjectId {
    _id: string;
}


/* [Component - props] CommentSection */
// TODO - user?: any; 타입변경
export interface CommentSectionProps {
    saveCommentData: CommentData[];
    user?: any;
}