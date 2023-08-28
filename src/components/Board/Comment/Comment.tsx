'use client'
import {useState} from "react";
import styles from './Comment.module.scss';
import {useCommentAPI} from '@/hooks/Board/Comment/useCommentAPI';
import GetCommentButton from "@/components/Board/Comment/CommentButton";
import CommentSection from "@/components/Board/Comment/CommentSection";
import {useSession} from "next-auth/react";
import {CommentInputObjectId} from '@/types/Comment';

const Comment = (props: CommentInputObjectId): JSX.Element => {
    const {data: session } = useSession();

    const [comment, setComment] = useState<string>('');
    const [saveCommentData, postComment] = useCommentAPI(props._id);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>댓글 작성</h1>
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
                <CommentSection
                    saveCommentData={saveCommentData}
                    user={session?.user}
                />
            </div>
        </div>
    )
}

export default Comment;