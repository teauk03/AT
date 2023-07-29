'use client'
import {useState} from "react";
import styles from './Comment.module.scss';
import {CommentProps} from '@/types/Components/Comment';
import {useCommentAPI} from '@/hooks/useCommentAPI';
import GetCommentButton from "@/components/Comment/CommentButton";

const Comment = (props: CommentProps): JSX.Element => {
    let [comment, setComment] = useState<string>('');
    let [data, postComment] = useCommentAPI(props._id);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>댓글 작성</h3>
            <div className={styles['text-wrapper']}>
                <textarea
                    className={styles['text-box']}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
                        setComment(event.target.value)
                    }}
                />
            </div>

            {/* Submit Button */}
            <div className={styles['btn-wrapper']}>
                <p className={styles.count}>0 / 300</p>
                <GetCommentButton
                    comment={comment}
                    postComment={postComment}
                />
            </div>

            {/* Comment - (T : Comment , F: 등록된 댓글이 없습니다.) */}
            <div className={styles['comment-wrapper']}>
                <h3 className={styles['comment-title']}>댓글</h3>
                {data.length > 0 ?
                    data.map((a, i) =>
                        <p className={styles.comment} key={i}>{a.content}</p>
                    )
                    : <p className={styles['none-text']}>등록된 댓글이 없습니다.</p>}
            </div>
        </div>
    )
}

export {Comment};