/* [Component - GLB] Navigation */
import React from "react";

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

/* [Component] UserLoginMenu */
export interface onClickProps {
    onClick: React.MouseEventHandler;
    isMenClicked: boolean;
}