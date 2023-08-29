'use client'
import React from 'react';
import useNewPostHandler from "@/hooks/Board/useNewPostAuth";
import Link from "next/link";
import styles from "@/components/Board/Forum/Forum.module.scss";
import {IoCreateOutline} from "react-icons/io5";

const WriteButton = () => {
    /* 새 게시물 작성 버튼 */
    const handleNewPostOnClick = useNewPostHandler();

    return (
        <>
            {/* Create Write : Routing(../write) */}
            <Link className={styles['forum-link-button']} href={'/write'} onClick={handleNewPostOnClick}>
                <IoCreateOutline/>
                <span>글작성</span>
            </Link>
        </>
    );
};

export default WriteButton;