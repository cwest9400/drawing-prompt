import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';
import Link from "next/link"


export default function Navbar() {
    const [isTop, setIsTop] = useState(false);

    function handleButtonClick() {
        setIsTop(isTop);
    };




    return (
        <div className={`${styles.navbar} ${isTop ? styles.top : ''}`}>
            
                
                    <Link href="/promptsPage">Word Prompt</Link>
                
                    <Link href="/imagesPage">Image Prompt</Link>
               
                    <Link href="/" onClick={handleButtonClick}>test animation</Link>
                
                {/* <button onClick={handleButtonClick}>
                    {isTop ? 'Scroll Down' : 'Scroll Up'}
                </button> */}
            
        </div>
    )
}