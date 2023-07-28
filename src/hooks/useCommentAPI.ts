import { useState, useEffect } from "react";
import { CommentData } from '../types/Components/Comment';

const useCommentAPI = (id: string): [CommentData[], (comment: string) => void] => {
    const [data, setData] = useState<CommentData[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect((): void => {
        fetch('/api/comment/list?id=' + id)
            .then(response => response.json())
            .then(result => {
                setData(result as CommentData[]);
            })
    }, [id, refresh]);

    const postComment = (comment: string): void => {
        fetch('/api/comment/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment,
                _id: id,
            }),
        }).then(() => setRefresh(!refresh));
    };

    return [data, postComment];
};

export {useCommentAPI}