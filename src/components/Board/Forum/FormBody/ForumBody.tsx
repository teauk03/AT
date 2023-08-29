'use client'
import React, {useEffect} from "react";
import styles from '@/components/Board/Forum/Forum.module.scss';
import Link from "next/link";
import {pathTypeProps, Post} from "@/types/Borad";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import {AiOutlineUser} from "react-icons/ai";

type Result = {
    posts: Post[];
}

/* 작성글 출력 컴포넌트 */
const ForumBody = ({ path, href }: pathTypeProps) => {
    const [result, setResult] = React.useState<Result | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/${path}/list`);
            const result = await res.json();
            setResult(result);
        };
        fetchData();
    }, [path]);

    if (!result) return <LoadingForum/>;
    const { posts} = result;

    return (
        <>
            <div>
                <Link href={'/forum'}>
                    <input type="radio"/>
                    Test
                </Link>
            </div>
            <ul className={styles.forumItemContainer}>
                {posts.map((notice, index) => (
                    <li className={styles.forumList} key={index}>
                        {/* User Title */}
                        <div className={styles.authorWrap}>
                            <AiOutlineUser/>
                            <div className={styles.postAuthor}>
                                {notice.userName}
                            </div>
                        </div>

                        {/* 제목 */}
                        <Link className={styles.titleLink} href={`/${href}/${notice._id}`}>
                            <h3 className={styles.titleText}>
                                {notice.title}
                            </h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ForumBody;