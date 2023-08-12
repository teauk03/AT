import axios from "axios";
import { useState, useEffect } from "react";
import { CommentData } from '@/types/Comment';


const useCommentAPI = (id: string): [CommentData[], (comment: string) => void] => {
    const [
        saveCommentData,
        setData
    ] = useState<CommentData[]>([]);

    const [
        refresh,
        setRefresh
    ] = useState<boolean>(false);

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
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
        }
    };

    return [saveCommentData, postComment];
};

export {useCommentAPI}