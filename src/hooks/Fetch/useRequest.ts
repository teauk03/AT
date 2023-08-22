import { useCallback } from 'react';

interface UseRequestOptions {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'; // 기타 필요한 HTTP 메소드를 추가할 수 있습니다.
    body?: any;
    onSuccess?: () => void;
    onFailure?: () => void;
}

const useRequest = ({ url, method = 'POST', body, onSuccess, onFailure }: UseRequestOptions) => {
    const handleRequest = useCallback(async () => {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                // 요청이 성공적으로 처리되었습니다.
                onSuccess?.();
            } else {
                // 오류 처리
                console.error('Request failed');
                onFailure?.();
            }
        } catch (error) {
            // 네트워크 오류 처리
            console.error('Network error:', error);
            onFailure?.();
        }
    }, [url, method, body, onSuccess, onFailure]);

    return handleRequest;
};

export default useRequest;