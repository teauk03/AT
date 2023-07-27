import React from 'react';
import styles from "./DropdownMenu.module.scss";
import Link from "next/link";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faGear, faUser} from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = ({session}: { session: Session | null }) => {
    const handleSignOut = async (event: any): Promise<void> => {
        event.preventDefault();
        await signOut();
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.section}>
                {/* User Information */}
                <ul className={styles.user}>
                    <li className={styles.menu}>
                        <div className={styles['user-img-wrapper']}>
                            <Image
                                src={'/user.svg'}
                                alt="user profile pic"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="/">{session?.user?.name}</Link>
                    </li>
                    {/* Menu */}
                    <li className={styles.menu}>
                        <div className={styles['user-img-wrapper']}>
                            <FontAwesomeIcon
                                icon={faGear}
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="/">Settings</Link>
                    </li>
                    <li className={styles.menu}>
                        <div className={styles['user-img-wrapper']}>
                            <FontAwesomeIcon
                                icon={faArrowRightFromBracket}
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href="/" onClick={handleSignOut}>Sign Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;