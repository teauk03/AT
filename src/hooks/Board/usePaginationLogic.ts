import useFetchPosts from '@/hooks/Fetch/useFetchPosts';
import { Post } from '@/types/Borad';

/**
 * 커뮤니티 및 공지사항 컨테이너에서 사용할 공통 로직을 위한 훅.
 * @param {string} apiPath - 게시글을 가져올 API의 경로
 * @param {number} page - 현재 페이지 번호
 * @param {Post[]} initialPosts - 초기 게시글 데이터
 * @param {number} totalPosts - 총 게시글 수
 * @returns {Object} 게시글과 관련된 상태 및 핸들러
 * @returns {number} currentPage - 현재 페이지 번호
 * @returns {Post[]} result - 현재 페이지의 게시글
 * @returns {number} totalPages - 총 페이지 수
 * @returns {function} setCurrentPage - 현재 페이지 설정 함수
 */
const usePaginationLogic = (
    apiPath: string, page: number, initialPosts: Post[], totalPosts: number
) => {
    const { currentPage, result, totalPages, setCurrentPage } = useFetchPosts(
        apiPath, page, initialPosts, totalPosts
    );

    return {
        currentPage, result, totalPages, setCurrentPage,
    };
};

export default usePaginationLogic;