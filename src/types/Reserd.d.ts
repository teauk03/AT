/* [ReserveHome] 사이드 체크 박스 */
export interface GameNavigation {
    id: string;
    label: string;
    count: number;
    checked: boolean;
}


/* [ReserveHome] 예약 카드 */
export interface GameCards {
    game_id: number;
    company: string;
    title: string;
    subtitle: string;
    backgroundColor: string;
    price: string;
    time: string;
    genre: string;
    series_first: string;
    series_last: string;
    image: string;
}