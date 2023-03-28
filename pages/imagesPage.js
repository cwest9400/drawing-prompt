import Link from "next/link"
import RandomImage from "../components/RandomImage"
import Navbar from "../components/Navbar"
import styles from '../styles/Navbar.module.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function imagesPage() {

    return (
        <div>
            <Navbar />

            <Link href="/">back to home</Link>
            <div>
                <div>
                    <Link href="" className={styles.card}>
                        <h3 className={inter.className}>Categories</h3>
                    </Link>
                    <Link href="" className={styles.card}>
                    <h3 className={inter.className}>Random</h3>
                </Link>
                <Link href="" className={styles.card}>
                    <h3 className={inter.className}>Search</h3>
                </Link>
                
                <Link href="/imagesPage" className={styles.card}>
                    <h3 className={inter.className}>Random</h3>
                </Link>
                </div>

                {/* <RandomImage /> */}
            </div>

        </div>
    )
}