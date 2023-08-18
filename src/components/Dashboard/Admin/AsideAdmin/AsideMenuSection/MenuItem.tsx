import React from 'react';
import styles from "@/components/Dashboard/Admin/AsideAdmin/AsideAdmin.module.scss";
import Link from "next/link";

type typeMenuItemProps = {
    item: {
        route: string;
        svgHref: string;
        label: string;
    };
}

const MenuItem = ({item}: typeMenuItemProps) => {
    return (
        <li>
            <Link href={item.route}>
                <svg><use xlinkHref={item.svgHref}></use></svg>
                <span>{item.label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;