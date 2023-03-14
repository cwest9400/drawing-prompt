

import Link from "next/link"

export default function NavbarMain() {
  
    return (
        <div>
            
            <Link href="/promptsPage">Word Prompt</Link>
            <Link href="/imagesPage">Image Promt</Link>
            <Link href="">Sign In</Link>
        </div>
    )
}