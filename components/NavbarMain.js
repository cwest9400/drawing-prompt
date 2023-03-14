import styles from '../styles/NavbarMain.module.css';

import Link from "next/link"

import { Link as ScrollLink } from 'react-scroll';
export default function NavbarMain() {
    const [isTop, setIsTop] = userState(true);

    const handleButtonClick = ()=> {
        setIsTop(!isTop);
    };




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
                    <Link href="/">Sign In</Link>
                </li>
                <li>
                    <Link href="/">test animation</Link>
                </li>
            </ul>
        </nav>
    )
}