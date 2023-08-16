import React from 'react';
import styles from "@/components/Forum/ForumItem.module.scss";
import ForumAsideLeftMenu from "@/components/Forum/ForumAside/ForumAsideLeftMenu";


const ForumSideNavbar = () => {
   return (
        <aside className={styles['aside-slb']} role="sub-navigation">
            {/* Sub Menu */}
            <ForumAsideLeftMenu/>
        </aside>
    );
};

export default ForumSideNavbar;