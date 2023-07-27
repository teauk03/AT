import { useCallback } from 'react';

const useDeletePost = () => {
    const handleDelete = useCallback(async (_id: string) => {
        try {
            const response = await fetch('/api/post/delete', {
                method: 'POST',
                body: JSON.stringify({_id})
            });

            if (response.ok) {
                window.location.href = '/notice';
            } else {
                const data = await response.json();
                throw new Error(data.error);
            }
        } catch (error) {
            alert(`오류가 발생했습니다: ${(error as Error).message}`);
        }
    }, []);

    return {handleDelete};
};

export {useDeletePost};