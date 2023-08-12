import React from 'react';
import styles from "@/components/Comment/Comment.module.scss";
import {CommentSectionProps} from "@/types/Comment";


/* 코멘트 출력 컴포넌트 */
const CommentSection
    : React.FC<CommentSectionProps> = (
        {saveCommentData, user}
) => {

    return (
        <>
            {saveCommentData.length > 0 ?
                saveCommentData.map((a, i) =>
                    <p className={styles.comment} key={i}>
                        {a.author === user?.email ? user?.name : a.name} : {a.content}
                    </p>
                )
                : <p className={styles['none-text']}>등록된 댓글이 없습니다.</p>}
        </>
    );
};

export default CommentSection;