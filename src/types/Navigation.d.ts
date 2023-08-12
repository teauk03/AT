/* [Component - GLB] Navigation */
import React from "react";

export interface MenuItemProps {
    gblMenuItems: MenuItem[];
}

/* [Component - GLB] NavItems
 * [Component - SLB] ForumSlbMenu(SLB_FORUM_ITEMS) */
export interface MenuItem {
    title: string;
    route: string;
}

/* [Component] UserLoginMenu */
export interface onClickProps {
    onClick: React.MouseEventHandler;
    isMenClicked: boolean;
}

/* [Component - SLB] StudyPlanSlbContainer */
export interface StudyPlanSlbItem {

}