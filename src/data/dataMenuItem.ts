/* [GLB] Navbar Menu Array */
export const GLB_MENU_ITEMS = [
    { title: '커뮤니티', route: '/forum' },
    {
        title: '매장소식',
        route: '/announcement',
        subMenu: [
            { title: '공지사항', route: '/support/notice' },
            { title: '이벤트', route: '/event' },
        ],
    },
    {
        title: '기기대여',
        route: '/reserve/home',
        subMenu: [
            { title: '대여안내', route: '/support/notice' },
        ],
    },
    {
        title: '고객지원',
        route: '/support',
        subMenu: [
            { title: '마이페이지', route: '/support/mypage' },
        ],
    },
];


/* [SLB] Navbar Menu Array */
export const  SLB_FORUM_ITEMS = [
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


/* [SLB] Navbar Menu Array */
export const SLB_MENU_ITEMS = [
    {title: '기본정보', route: '/user'},
    {title: '계정정보', route: '/user/account'},
];


/* [SLB] Support Side Menu Array */
export const SUPPORT_SLB_ITEMS = [
    { route: '/support', label: '검색' },
    { route: '/support', label: '온라인 문의' },
    { route: '/support/myHistory', label: '내 문의 내역' },
    { route: '/support', label: '상담 봇' },
]