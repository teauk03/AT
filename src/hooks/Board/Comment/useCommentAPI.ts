import axios from "axios";
import { useState, useEffect } from "react";
import { CommentData } from '@/types/Comment';

/**
 * 댓글과 관련된 API 호출을 관리하는 커스텀 훅.
 * @param {string} id - 댓글을 불러올 게시글의 ID
 * @returns {[CommentData[], (comment: string) => void]} 댓글 데이터와 댓글을 게시하는 함수
 */
const useCommentAPI = (id: string): [CommentData[], (comment: string) => void] => {
    /* 현재 게시글의 댓글 데이터 상태 */
    const [
        saveCommentData,
        setData
    ] = useState<CommentData[]>([]);

    /* 댓글을 새로고침할지 여부를 결정하는 상태 */
    const [
        refresh,
        setRefresh
    ] = useState<boolean>(false);

    /* 게시글 ID나 refresh 상태가 변경될 때마다 댓글 데이터를 다시 가져옴 */
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get(`/api/comment/list?id=${id}`);
                setData(response.data as CommentData[]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [id, refresh]);

    /**
     * 댓글을 게시하는 함수.
     * @param {string} comment - 게시할 댓글 내용
     */
    const postComment = async (comment: string) => {
        try {
            await axios.post('/api/comment/new', {
                comment,
                _id: id,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            /* 댓글이 성공적으로 게시되면 댓글을 새로고침 */
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
        }
    };

    return [saveCommentData, postComment];
};

export {useCommentAPI}