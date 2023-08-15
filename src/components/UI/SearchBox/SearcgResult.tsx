import React from 'react';
import styles from '@/components/Forum/ForumItem.module.scss';
import SvgIconComponent from "@/components/SvgIconComponent";
import Link from "next/link";
import {MongoPost} from "@/types/Borad";

const SearchResult = ({posts, searchQuery}: { posts?: Array<MongoPost>; searchQuery: string }) => {
    //console.log('posts', posts)
    return (
        <main className={styles.container}>

            {/* Forum Header */}
            <div className={styles['forum-header']}>
                <h2 className={styles['forum-header-title']}>커뮤니티</h2>
                <p className={styles['forum-header-sub']}>ALL</p>

                {/* Search & Write Menu */}
                <div className={styles['forum-sub-title']}>
                    {/* Create Write : Routing(../write) */}
                    <Link className={styles['forum-link-button']} href={'/write'}>
                        <SvgIconComponent width={20} height={20}
                                          svgPath={'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'}/>
                        글작성
                    </Link>
                </div>
            </div>
            <span style={{textAlign: 'center'}}>
                다음에 대한 결과 표시: <span className="font-semibold">{searchQuery}</span>
            </span>
            <ul className={styles['forum-item-container']}>
                {posts ? (

                    posts.map((post, index) => (
                        <li key={index} className={styles['forum-list']}>
                            {/* User Title */}
                            <div className={styles['author-wrap']}>
                                <SvgIconComponent
                                    width={20} height={20}
                                    svgPath={'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'}
                                />
                                <div className={styles['post-author']}>
                                    {post.userName}
                                </div>
                            </div>

                            {/* 제목 */}
                            <Link className={styles['title-link']} href={`/forum/${post._id}`}>
                                <h3 className={styles['title-text']}>
                                    {post.title}
                                </h3>
                            </Link>
                        </li>
                    ))
                ) : (
                    // posts가 undefined인 경우에 대한 처리
                    <div>No results found</div>
                )}
            </ul>
        </main>
    );
};

export default SearchResult;