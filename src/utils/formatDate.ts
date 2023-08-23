/**
 * 주어진 날짜 문자열을 "YYYY년 MM월 DD일" 형식으로 변환합니다.
 * @param {any} dateString - 변환할 날짜 문자열입니다.
 * @returns {string} "YYYY년 MM월 DD일" 형식의 날짜 문자열을 반환합니다.
 */
const formatDate = (dateString: any): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
};

export default formatDate;