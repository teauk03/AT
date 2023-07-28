import { useState , FormEvent } from 'react';
import { useSession } from "next-auth/react";

/**
 * [Interface] useCreatePost 훅에 전달
 * onSuccess - 포스트 작성이 성공했을 때 실행되는 콜백
 * onError - 포스트 작성 중 오류가 발생했을 때 실행되는 콜백
 */
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
    const { data: session } = useSession();
    if (!session) {
        throw new Error('No session found');
    }

    const postNewPost = async ({title, content, userName}: PostData) => {
        const response = await fetch('/api/post/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, userName }),
        });

        if (!response.ok) throw new Error('Server Error');

        return await response.json();
    }

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
                userName: session.user.name
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