import {Post} from "@/types/Borad";

interface FetchPostsDataResponse {
    limit?: number;
    endpoint: string;
    page: number;
}
/**
 * 특정 페이지의 포스트 데이터를 가져오는 함수.
 * @param {string} endpoint - 엔드포인트 주소 (api 주소) 
 * @param {number} page - 가져올 포스트가 있는 페이지 번호
 * @param {number} [limit=10] - 한 페이지에 가져올 포스트 수 (기본값: 10)
 * @returns {Promise<{posts: Post[], totalPosts: number}>} - 포스트 리스트와 총 포스트 수를 포함한 객체
 * @throws {Error} - 데이터를 가져오는 도중 에러가 발생한 경우
 */

const fetchPostsData = async ({endpoint, page, limit}: FetchPostsDataResponse) => {
    const actualLimit = limit || 10;

    try {
        /* SITE_URL 환경변수 또는 기본 URL을 사용 */
        const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
        /* 지정된 페이지와 제한 수를 사용하여 API 요청 */
        const response = await fetch(`${SITE_URL}/api/${endpoint}?page=${page}&limit=${actualLimit}`);
        /* 응답을 JSON 형식으로 파싱 */
        const result = await response.json();

        /* 포스트 리스트와 총 포스트 수를 반환 */
        return {
            posts: result.posts,
            totalPosts: result.totalPosts,
            totalPages: result.totalPages,
            limit: actualLimit,
            endpoint: endpoint,
            page: page
        };

    } catch (error) {
        /* 에러가 발생한 경우, 에러 메시지를 던짐 */
        throw new Error("Something went wrong while fetching posts!");
    }
};

export default fetchPostsData;