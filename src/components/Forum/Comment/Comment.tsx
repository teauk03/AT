'use client'
import {useState} from "react";
import styles from './Comment.module.scss';
import {CommentInputObjectId} from '@/types/Comment';
import {useCommentAPI} from '@/hooks/Board/useCommentAPI';
import GetCommentButton from "@/components/Forum/Comment/CommentButton";
import CommentSection from "@/components/Forum/Comment/CommentSection";
import {useSession} from "next-auth/react";

const Comment = (props: CommentInputObjectId): JSX.Element => {
    const {data: session } = useSession();

    const [
        comment,
        setComment
    ] = useState<string>('');

    const [
        saveCommentData,
        postComment
    ] = useCommentAPI(props._id);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>댓글 작성</h3>
            <div className={styles['text-wrapper']}>
                {/* Comment TextArea */}
                <textarea
                    className={styles['text-box']}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
                        setComment(event.target.value)
                    }}
                />

                {/* Comment Submit Button */}
                <GetCommentButton
                    comment={comment}
                    postComment={postComment}
                />
            </div>

            {/* Comment - (T : Add Comment , F: 등록된 댓글이 없습니다.) */}
            <div className={styles['comment-wrapper']}>
                <h3 className={styles['comment-title']}>댓글</h3>
                <CommentSection
                    saveCommentData={saveCommentData}
                    user={session?.user}
                />
            </div>
        </div>
    )
}

export {Comment};