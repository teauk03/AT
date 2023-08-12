import { useRouter } from 'next/navigation';

/* 뒤로가기 커스텀 훅 */
const useNavigation = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return {
        handleGoBack
    };
};

export default useNavigation;