import React from 'react';
import styles from "@/components/Dashboard/Admin/AsideAdmin/AsideAdmin.module.scss";
import MenuItem from "@/components/Dashboard/Admin/AsideAdmin/AsideMenuSection/MenuItem";

type typeMenuSectionProps = {
    aside_title: string;
    items: {
        route: string;
        svgHref: string;
        label: string;
    }[];
}

const MenuSection = ({ aside_title, items }: typeMenuSectionProps) => {
    return (
        <div className={styles['menu-heading']}>
            <h3 className={styles.title}>{aside_title}</h3>
            {items.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </div>
    );
};

export default MenuSection;