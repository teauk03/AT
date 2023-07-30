import axios from "axios";
import { useState, useEffect } from "react";
import { CommentData } from '@/types/Components/Comment';


const useCommentAPI = (id: string): [CommentData[], (comment: string) => void] => {
    const [data, setData] = useState<CommentData[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get(`/api/comment/list?id=${id}`);
                setData(response.data as CommentData[]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().catch(error => console.error(error));
    }, [id, refresh]);


    const postComment = async (comment: string): Promise<void> => {
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

    return [data, postComment];
};

export {useCommentAPI}