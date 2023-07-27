import styles from './GetStartButton.module.scss'
import Link from "next/link";

const GetStartButton = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Link className={styles.button} href="/user/login">
                    Get Start
                </Link>
            </div>
        </>
    );
}

export {GetStartButton}