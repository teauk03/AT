import { useCallback } from 'react';

interface UseRequestOptions {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    onSuccess?: (data: any) => void;
    onFailure?: (error: any) => void;
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

            // 응답을 JSON 형태로 파싱
            const data = await response.json();
            if (response.ok) {
                // 요청이 성공적으로 처리되었습니다.
                onSuccess?.(data);
            } else {
                // 오류 처리
                const error = await response.json();
                console.error('Request failed');
                onFailure?.(error);
            }
        } catch (error) {
            // 네트워크 오류 처리
            console.error('Network error:', error);
            onFailure?.(error);
        }
    }, [url, method, body, onSuccess, onFailure]);

    return handleRequest;
};

export default useRequest;