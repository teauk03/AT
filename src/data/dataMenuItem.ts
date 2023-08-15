/* [GLB] Navbar Menu Array */
export const GLB_MENU_ITEMS = [
    {title: '커뮤니티', route: '/forum'},
    {
        title: '매장소식',
        route: '/announcement',
        subMenu: [
            {title: '공지사항', route: '/announcement'},
            {title: '이벤트', route: '/event'},
        ],
    },
    {
        title: '기기대여',
        route: '/reserve/home',
        subMenu: [
            {title: '대여안내', route: '/reserve/home'},
        ],
    },
    {
        title: '고객지원',
        route: '/support',
        subMenu: [
            {title: '마이페이지', route: '/support/mypage'},
        ],
    },
];


/* [SLB] Navbar Menu Array */
export const SLB_FORUM_ITEMS = [
    {title: 'SOUND VOLTEX', manufacturer: 'Konami', route: '/forum'},
    {title: 'BeatMania IIDX', manufacturer: 'Konami', route: '/forum'},
    {title: 'GITADORA', manufacturer: 'Konami', route: '/forum'},
    {title: 'DANCERUSH', manufacturer: 'Konami', route: '/forum'},
    {title: 'MAIMAI', manufacturer: 'Namco', route: '/forum'},
    {title: 'Jubeat', manufacturer: 'Konami', route: '/forum'},
    {title: 'popn music', manufacturer: 'Konami', route: '/forum'},
    {title: 'DDR', manufacturer: 'Konami', route: '/forum'},
    {title: 'EZ2AC', manufacturer: 'ETC', route: '/forum'},
];

export const ASIDE_FORUM_ITEMS = [
    {
        title: 'Konami',
        items: [
            {title: 'SOUND VOLTEX', route: '/forum'},
            {title: 'BeatMania IIDX', route: '/forum'},
            {title: 'GITADORA', route: '/forum'},
            {title: 'Jubeat', route: '/forum'},
            {title: "Pop'n music", route: '/forum'},
            {title: "DDR", route: '/forum'},
        ],
    },
    {
        title: 'Namco',
        items: [
            {title: 'MaiMai', route: '/forum'},
            {title: 'Nostalgia', route: '/forum'},
        ],
    },
    {
        title: 'ETC',
        items: [
            {title: 'EZ2AC', route: '/forum'},
            {title: 'Pump it up', route: '/forum'},
        ],
    },
];

export const ADMIN_FORUM_ITEMS = [
    {title: '공지사항', route: '/forum'},
    {title: '이벤트', route: '/forum'},
];


/* [SLB] Navbar Menu Array */
export const SLB_MENU_ITEMS = [
    {title: '기본정보', route: '/user'},
    {title: '이메일변경', route: '/user/changeid'},
    {title: '비밀번호변경', route: '/user/changepwd'},
    {title: '회원탈퇴', route: '/user/secede'},
];


/* [SLB] Support Side Menu Array */
export const SUPPORT_SLB_ITEMS = [
    {route: '/support', label: '검색'},
    {route: '/support/myHistory', label: '내 문의 내역'},
    {route: '/support', label: '상담 봇'},
]