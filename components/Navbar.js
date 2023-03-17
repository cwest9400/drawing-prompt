import styles from '../styles/Navbar.module.css';
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <Link href="/promptsPage" className={styles.card}>
                    <h2 className={inter.className}>Text Prompt</h2>
                    <p className={inter.className}>Stir up your imagination. An AI generated prompt to get your brain moving.</p>
                </Link>

                <Link href="/imagesPage">Image Prompt</Link>
            </div>

        </div>
    )
}