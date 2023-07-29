import axios, { AxiosError } from 'axios';
import {useState, FormEvent, useEffect} from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

interface  CreatePostOptions {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

interface PostData {
    title: string;
    content: string;
    userName: any;
}

const useCreatePost = ({ onSuccess, onError }: CreatePostOptions = {}) => {
    const [isLoading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    const router  = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
            alert('로그인 후 이용 가능합니다.')
        }
    }, [status]);

    const postNewPost = async ({title, content, userName}: PostData) => {
        try {
            const response = await axios.post('/api/post/new', {
                title,
                content,
                userName
            });

            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw new Error(axiosError.message || 'Server Error');
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const titleElement = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const contentElement = e.currentTarget.elements.namedItem('content') as HTMLInputElement;

        const title = titleElement?.value || '';
        const content = contentElement?.value || '';

        try {
            const postData: PostData = {
                title,
                content,
                userName: session?.user?.name ?? 'Unknown User'
            };
            const data = await postNewPost(postData);
            if (onSuccess) onSuccess();
        } catch (error) {
            if (onError) onError(error as Error);
        } finally {
            setLoading(false);
        }
    }

    return { handleSubmit, isLoading };
};

export default useCreatePost;