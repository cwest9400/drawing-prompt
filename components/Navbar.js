import styles from '../styles/Navbar.module.css';
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

    return (
        <nav className={styles.main}>

            <div className={styles.grid}>
                <div>
                    <h2 className={inter.className}>Text Prompt</h2>
                    <p className={inter.className}>Stir up your imagination. An AI generated prompt to get your brain moving.</p>
                </div>

                <div>
                    <h2 className={inter.className}>Image Prompt</h2>
                    <p className={inter.className}>Reference images to beef up your visual library.</p>
                </div>
                <Link href="/promptsPage" className={styles.card}>
                    <h3 className={inter.className}>Animal </h3>
                </Link>
                
                <Link href="" className={styles.card}>
                    <h3 className={inter.className}>Search</h3>
                </Link>
                
                <Link href="/imagesPage" className={styles.card}>
                    <h3 className={inter.className}>Random</h3>
                </Link>
                
                <Link href="" className={styles.card}>
                    <h3 className={inter.className}>Categories</h3>
                </Link>
                
            </div>

        </nav>
    )
}