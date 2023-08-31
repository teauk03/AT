'use client'
import axios from "axios";
import React, {useEffect, useState} from 'react';
import styles from "@/components/Board/Forum/Forum.module.scss";
import {ObjectId} from "mongodb";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import ForumHeader from "@/components/Board/Forum/ForumHeader/ForumHeader";
import LeftNavBar from "@/components/UI/Nav/LeftNavBar/LeftNavBar";
import SvgIconComponent from "@/components/SvgIconComponent";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import SearchForum from "@/components/SearchBar/SearchBox/SearchForum";

type ForumPostPage = {
    _id: ObjectId;
    id: string;
    title: string;
    content: string;
    userName: string;
    division: string;
};

const ForumPage = ({path}: {path: string}) => {
    const params = useSearchParams();
    const division = params ? params.get('division') : null;
    const [posts, setPosts] = useState<ForumPostPage[]>([]);

    useEffect(() => {
        if (division) {
            axios.get(`/api/post/find?division=${division}`)
                .then(response => {
                    // division에 해당하는 게시물만 필터링
                    const filteredPosts = response.data.posts.filter((post: ForumPostPage) => post.division === division);
                    setPosts(filteredPosts);
                })
                .catch(error => console.error(error));
        }
    }, [division]);

    /* Forum Header */
    const renderForumHeader = () => <ForumHeader/>;

    const renderForumContent = () => (
        <div className={styles['article-list']}>
            {/* 커뮤니티 네비게이션 */}
            <LeftNavBar/>

            <ul className={styles['main-item-container']}>
                {posts.map((post, index) => (
                    /* 게시물 렌더링 */
                    <li key={index} className={styles['main-list']}>
                        {/* User Title */}
                        <div className={styles['author-wrap']}>
                            <SvgIconComponent
                                width={20} height={20}
                                svgPath={'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'}
                            />
                            <div className={styles['post-author']}>
                                {posts[index].userName}
                            </div>
                        </div>
                        {/* 제목 */}
                        <Link className={styles['title-link']} href={`/${path}/${posts[index]._id}`}>
                            <h3 className={styles['title-text']}>
                                {posts[index].title}
                            </h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    const renderForumFooter = () => (
        <>
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
        </>
    );



    return (
        <main className={styles.container}>
            {renderForumHeader()}
            {renderForumContent()}
            {renderForumFooter()}
        </main>
    );
};

export default ForumPage;