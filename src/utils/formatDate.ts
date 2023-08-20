/**
 * 주어진 날짜 문자열을 "YYYY-MM-DD" 형식으로 변환합니다.
 * @param {any} dateString - 변환할 날짜 문자열입니다.
 * @returns {string} "YYYY-MM-DD" 형식의 날짜 문자열을 반환합니다.
 */
const formatDate = (dateString: any): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1)
        .padStart(2, '0')}-${String(date.getDate())
        .padStart(2, '0')}`;
};

export default formatDate;