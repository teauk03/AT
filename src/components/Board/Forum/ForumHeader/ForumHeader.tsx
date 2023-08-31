import React from 'react';
import styles from "@/components/Board/Forum/Forum.module.scss";
import Link from "next/link";
import {AiOutlineHome} from "react-icons/ai";
import {LiaAngleRightSolid} from "react-icons/lia";

const ForumHeader = () => {
    return (
        <div className={styles.forumHeader}>
            <h2 className={styles.headerTitle}>
                <Link href={'/main'}>커뮤니티</Link>
            </h2>
            <p className={styles.history}>
                <Link href={'/'}><AiOutlineHome/></Link>
                <span><LiaAngleRightSolid/></span>
                <Link href={'/'}>커뮤니티</Link>
                <span><LiaAngleRightSolid/></span>
                <Link href={'/'}>???</Link>
            </p>
        </div>
    );
};

export default ForumHeader;