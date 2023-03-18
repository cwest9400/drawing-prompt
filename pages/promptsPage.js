import Link from "next/link"
import AnimalPrompt from "../components/AnimalPrompt"
import Navbar from "../components/Navbar"

export default function promptsPage() {
  
    return (
        <div>
            <Navbar />
            <Link href="/">back to home</Link>
            <AnimalPrompt />
        </div>
    )
}