import styles from './page.module.scss'
import NavbarComponent from "@/components/Nav/Navbar";

export default function Home() {
    return (
        <>
            <NavbarComponent/>
            <main className={styles.main}></main>
        </>
    )
}