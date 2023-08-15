import axios, { AxiosError } from 'axios';
import {useState, FormEvent} from 'react';
import {useSession} from "next-auth/react";
import {CreatePostOptions, PostData, ServerResponse} from '@/types/Borad';


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

    /* 사용자의 역할이 "admin"인지 확인후 역할에 따라 API 엔드포인트 선택 */
    const isAdmin = session?.user?.role === 'admin';
    const endpoint = isAdmin ? '/api/notice/new' : '/api/post/new';

    /* 서버에 새로운 게시글을 생성하는 요청을 보내는 비동기 함수 */
    const postNewPost = async ({title, content, division_title, division, userName}: PostData) => {
        try {
            const response = await axios.post(
                endpoint, { title, content, division_title, division, userName }
            );
            return response.data; // 응답 데이터 리턴

        } catch (error) {
            const axiosError = error as AxiosError<ServerResponse>;
            const serverMessage = axiosError.response?.data?.error || 'Server Error';
            throw new Error(serverMessage);
        }
    };


    /* 폼의 제출 이벤트를 처리 (새 포스트를 생성하는 요청) */
    const handleNewPostSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const titleElement = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const contentElement = e.currentTarget.elements.namedItem('content') as HTMLInputElement;
        const divisionTitleElement = e.currentTarget.elements.namedItem('division_title') as HTMLSelectElement;
        const divisionElement = e.currentTarget.elements.namedItem('division') as HTMLSelectElement;

        const title = titleElement?.value || '';
        const content = contentElement?.value || '';
        const division_title = divisionTitleElement?.value || '';
        const division = divisionElement?.value || '';


        try {
            const postData: PostData = {
                division_title, division,title, content, userName: session?.user?.name ?? 'Unknown User'
            };

            const data = await postNewPost(postData);
            if (onSuccess) onSuccess(data.message);

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