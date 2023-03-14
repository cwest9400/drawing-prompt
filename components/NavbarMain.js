import styles from '../styles/NavbarMain.module.css';

import Link from "next/link"

export default function NavbarMain() {

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/promptsPage">Word Prompt</Link>
                </li>
                <li>
                    <Link href="/imagesPage">Image Promt</Link>
                </li>
                <li>
                    <Link href="">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}