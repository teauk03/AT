// useRouter 메소드들의 타입
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
// url 타입
import type { UrlObject, URLSearchParams } from 'url';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {ParsedUrlQueryInput} from "querystring";


// 커스텀 할 메소드의 타입들을 재 정의
type Push = AppRouterInstance['push'];
type Replace = AppRouterInstance['replace'];
type Prefetch = AppRouterInstance['prefetch'];
type CustomMethod = Push | Replace | Prefetch;

// Href: UrlObject에 auth, hash, host, hostname 등이 있는데 그중에 사용 할 속성의 타입만 Pick
interface Href extends Pick<UrlObject, 'pathname' | 'query'> {
    query?: ParsedUrlQueryInput; // string 타입 제외 (객체만 들어오도록)
}
type Url = Href | string;

// push, replace 메소드에 두번째 인자 타입 (optional)
interface PrefetchOptions {
    kind: string;
}
interface NavigateOptions extends PrefetchOptions {
    forceOptimisticNavigation?: boolean;
}


// params에 들어오는 query객체를 쿼리스트링 형태로 변환
const qs = (params?: Href['query']) => {
    // 인자가 없을 경우 null반환
    if (!params) return null;

    const queryStringArray: string[] = [];

    Object.entries(params).forEach(([key, initialValue]) => {
        const value =
            typeof initialValue === 'boolean' || typeof initialValue === 'number'
                ? JSON.stringify(initialValue)
                : initialValue;
        // 객체 여부 확인
        const isObject = initialValue?.constructor === Object;

        if (!value) return;
        // 객체일 경우 에러
        if (isObject) throw new Error(`객체는 올 수 없습니다.`);
        // 배열값이 들어올 경우 중복 제거 후 변환
        if (Array.isArray(value)) {
            const uniqueValue = Array.from(new Set(value));
            queryStringArray.push(`${key}=${uniqueValue.join(`&${key}=`)}`);
            return;
        }
        queryStringArray.push(`${key}=${value}`);
    });
    // 쿼리스트링 형태로 변환
    return queryStringArray.join('&');
};

// push, replace, refetch를 할 때, 인자에 따른 함수 실행 방법 정의
const customRouter = (
    href: Url,
    method: CustomMethod,
    // TODO : options 임시 타입
    // NavigateOptions | PrefetchOptions | undefined
    options?: any
): void => {
    // ex: push('/order')의 경우 push 그대로 반환
    if (typeof href === 'string') return method(href, options);
    // pathname이 없을 경우 에러 반환
    if (!href.pathname) throw new Error('pathname이 없습니다.');
    // pathname이 있고, query가 없을 때, pathname값 반환
    if (href.pathname && !href.query) return method(href.pathname, options);
    // query에 객체가 들어오지 않는 경우 에러 반환
    if (href.query?.constructor !== Object) {
        throw new Error('query는 객체여야 합니다.');
    }

    // 위에서 만든 qs함수로 쿼리스트링 파싱
    const query: string = `${qs(href.query) ? `?${qs(href.query)}` : ''}`;
    const url: string = `${href.pathname}${query}`;
    return method(url, options);
};

// Custom Hooks
const useCustomRouter = () => {
    // 현재 URL에 있는 쿼리값을 파싱하기 위한 메소드
    const searchParams = useSearchParams();
    if (!searchParams) throw new Error("searchParams가 null입니다!");
    const { forEach } = searchParams!;

    // pathname도 같이 사용하기 위해서 사용
    const pathname: string | null = usePathname();

    // 원래 useRouter에값을 반환하기 위해 기존의 값은 이름 변경
    const {
        prefetch: navigationPrefetch,
        push: navigationPush,
        replace: navigationReplace,
        ...router
    }: AppRouterInstance = useRouter();

    // 쿼리스트링을 쿼리객체로 변환해주는 함수
    const parseQuery = () => {
        let params: {
            [key: string]:
                | string
                | string[]
                | number
                | number[]
                | (string | number)[];
        } = {};

        forEach((initialValue, key) => {
            const value = initialValue.toString();
            // 중복된 키값이 있을 경우, 하나의 키에 배열로 담아서 반환
            if (Object.keys(params).includes(key)) {
                params = {
                    ...params,
                    [key]: Array.from(new Set([...(params[key] as []), value])),
                };
                return;
            }
            // 키 : 밸류로 반환
            params = { ...params, [key]: value };
        });

        return params;
    };

    // 각각의 메소드에 매핑
    const push = (href: Url, options?: NavigateOptions): void => {
        customRouter(href, navigationPush, options);
    };
    const replace = (href: Url, options?: NavigateOptions): void => {
        customRouter(href, navigationReplace, options);
    };
    const prefetch = (href: Url): void => {
        customRouter(href, navigationPrefetch);
    };

    const query = parseQuery();

    return { pathname, prefetch, push, query, replace, ...router };
};

export default useCustomRouter;