import axios from "axios";
import { useCallback } from 'react';
import { useRouter } from "next/navigation";

const useDeletePost = () => {
    const router = useRouter();

    const handleDelete = useCallback(async (_id: string) => {
        try {
            const response = await axios.post('/api/post/delete', { _id });
            //console.log('response : ', response)
            if (response.status === 200) router.push('/main');
            else throw new Error(response.data.error);

        } catch (error) {
            alert(`오류가 발생했습니다: ${(error as Error).message}`);
        }
    }, [router]);

    return {handleDelete};
};

export {useDeletePost};