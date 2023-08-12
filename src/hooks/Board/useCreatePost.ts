import axios, { AxiosError } from 'axios';
import {useState, FormEvent} from 'react';
import {useSession} from "next-auth/react";
import {CreatePostOptions, PostData} from '@/types/Borad';


/* [Custom Hook] useCreatePost : 게시글 생성. 성공하거나 실패했을 때의 콜백을 인수로 받음. */
const useCreatePost = ({ onSuccess, onError }: CreatePostOptions = {}) => {
    const [
        isLoading,
        setLoading
    ] = useState(false);

    const {
        data: session,
        status
    } = useSession();


    /* 서버에 새로운 게시글을 생성하는 요청을 보내는 비동기 함수 */
    const postNewPost = async ({title, content, userName}: PostData) => {
        try {
            const response = await axios.post('/api/post/new', { title, content, userName });
            return response.data; // 응답 데이터 리턴

        } catch (error) {
            const axiosError = error as AxiosError;
            throw new Error(axiosError.message || 'Server Error');
        }
    };


    /* 폼의 제출 이벤트를 처리 (새 포스트를 생성하는 요청) */
    const handleNewPostSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const titleElement = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const contentElement = e.currentTarget.elements.namedItem('content') as HTMLInputElement;

        const title = titleElement?.value || '';
        const content = contentElement?.value || '';

        try {
            const postData: PostData = {
                title, content, userName: session?.user?.name ?? 'Unknown User'
            };

            const data = await postNewPost(postData);
            if (onSuccess) onSuccess();

        } catch (error) {
            if (onError) onError(error as Error);

        } finally {
            setLoading(false);
        }
    }


    /* 제출 이벤트를 처리 & 로딩 상태 반환. */
    return { handleNewPostSubmit, isLoading };
};

export default useCreatePost;