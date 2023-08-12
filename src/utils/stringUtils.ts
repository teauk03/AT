/* 주어진 문자열을 카멜 케이스로 변환 */
const toCamelCase = (str: string): string => {
    return str.split(' ')
        .map((word, index) => {
            // 첫 번째 단어 -> 전부 소문자로 변환
            if (index === 0) return word.toLowerCase();
            // 나머지 단어는 첫 문자만 대문자로 변환
            else return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
};

export default  toCamelCase;