'use client'
import React, {useEffect} from "react";
import styles from '@/components/Board/Forum/ForumItem.module.scss';
import Link from "next/link";
import {pathTypeProps, Post} from "@/types/Borad";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import {AiOutlineUser} from "react-icons/ai";

type Result = {
    posts: Post[];
}



/* 작성글 출력 컴포넌트 */
const ForumItem = ({ path, href }: pathTypeProps) => {
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
        <ul className={styles['forum-item-container']}>
            {posts.map((notice, index) => {
                return (
                    <li className={styles['forum-list']} key={index}>
                        {/* User Title */}
                        <div className={styles['author-wrap']}>
                            <AiOutlineUser/>
                            <div className={styles['post-author']}>
                                {notice.userName}
                            </div>
                        </div>

                        {/* 제목 */}
                        <Link className={styles['title-link']} href={`/${href}/${notice._id}`}>
                            <h3 className={styles['title-text']}>
                                {notice.title}
                            </h3>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default ForumItem;