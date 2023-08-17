import GAME_CARDS from "@/data/Game/data-game-card.json";

/**
 * 게임 타이틀을 기반으로 게임 정보를 가져옵니다.
 * 해당 게임 타이틀이 존재하지 않을 경우, N/A와 빈 문자열로 기본값을 반환합니다.
 * @param {string} gameTitle - 조회하려는 게임의 타이틀
 * @returns {object} 게임 정보 객체. 포함하는 키는 title, price, image, genre, series_first, series_last, time입니다.
 */
const getGameInfo = (gameTitle: string) => {
    const gameInfo = GAME_CARDS.ITEMS.find(game => game.title === gameTitle);
    return gameInfo || {
        title: 'N/A',
        price: 'N/A',
        image: '',
        genre: 'N/A',
        series_first: 'N/A',
        series_last: 'N/A',
        time: 'N/A'
    };
};

export default getGameInfo;