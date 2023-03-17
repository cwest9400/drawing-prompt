import styles from '../styles/Navbar.module.css';
import Link from "next/link"


export default function Navbar() {
    
    return (
        <div className={styles.navbar}>
                    <Link href="/promptsPage">Word Prompt</Link>
                    <Link href="/imagesPage">Image Prompt</Link>
                    
        </div>
    )
}