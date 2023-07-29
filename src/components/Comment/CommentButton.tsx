'use client'
import React from 'react';
import styles from './CommentButton.module.scss'

interface CommentProps {
    comment: string;
    postComment: (comment: string) => void
}

const GetCommentButton = ({comment, postComment}: CommentProps) => {
    return (
        <button
            className={styles['submit-btn']}
            onClick={(): void => {
                postComment(comment);
            }}>등록
        </button>
    );
};

export default GetCommentButton;