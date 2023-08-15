/* [ReserveHome] 사이드 체크 박스 */
export interface GameNavigation {
    id: string;
    label: string;
    count: number;
    checked: boolean;
}


/* [ReserveHome] 예약 카드 */
export interface GameCards {
    company: string;
    title: string;
    subtitle: string;
    backgroundColor: string;
    price: string;
    image: string;
}

export interface ReservationContent {
    item: string;
}

export interface ReservationInformation {
    title: string;
    contents: ReservationContent[];
}

export interface Data {
    RESERVATION_INFORMATION: ReservationInformation[];
}