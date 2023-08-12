import {LinkComponent} from "@/types/Link";

/* [Component] Project/StudyPlanListItem
 * 상속 : LinkComponent */
export interface StudyPlanListItemType {
    title: string;
    items: Array<LinkComponent>;
}