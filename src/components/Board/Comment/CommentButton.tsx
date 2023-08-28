import React from 'react';
import styles from './Comment.module.scss'
import useAuth from "@/hooks/Auth/useAuth";
import {GrAdd} from "react-icons/gr";
import {COMMENT_PROPS} from "@/types/UI";


/* [Component] 댓글을 등록하는 버튼 */
const GetCommentButton = ({comment, postComment}: COMMENT_PROPS) => {
    /* [Custom Hook] 사용자의 로그인 상태를 확인 */
    const { isLoggedIn } = useAuth();

    /* [Click Function] 사용자가 로그인한 상태이면 댓글을 등록
     * 로그인하지 않은 상태라면 로그인을 요청하는 알림을 표시 */
    const handleButtonClick = (): void => {
        if (isLoggedIn) postComment(comment);
        else alert("로그인이 필요합니다.");
    };

    /* 버튼 컴포넌트 반환 */
    return (
        <button
            className={styles['submit-btn']}
            onClick={handleButtonClick}>
            <GrAdd/>
        </button>
    );
};

export default GetCommentButton;