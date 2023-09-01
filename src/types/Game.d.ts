export type Game = {
    game_id: number;
    company: string;
    title: string;
    kr_title: string;
    en_title: string;
    genre: string;
    series_first: string;
    series_last: string;
}

export type Pricing = {
    game_id: number;
    price: string;
    time: string;
}

export type Image = {
    game_id: number;
    subtitle: string;
    backgroundColor: string;
    path: string;
}
