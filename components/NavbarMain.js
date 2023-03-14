import styles from '../styles/NavbarMain.module.css';

import Link from "next/link"

export default function NavbarMain() {
  
    return (
        <div className={styles.navbar}>
            
            <Link href="/promptsPage">Word Prompt</Link>
            <Link href="/imagesPage">Image Promt</Link>
            <Link href="">Sign In</Link>
        </div>
    )
}