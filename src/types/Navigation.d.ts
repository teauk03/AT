/* [Component - GLB] NavItems
 * [Component - SLB] ForumSlbMenu(SLB_FORUM_ITEMS) */
export interface MenuItem {
    title: string;
    route: string;
    subMenu?: MenuItem[];
}

export interface MenuItemProps {
    gblMenuItems: MenuItem[];
}