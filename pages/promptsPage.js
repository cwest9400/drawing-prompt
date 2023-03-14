import Link from "next/link"
import AnimalPrompt from "../components/AnimalPrompt"

export default function promptsPage() {
  
    return (
        <div>
            <h1>Prompts page</h1>
            <Link href="/">back to home</Link>
            <AnimalPrompt />
        </div>
    )
}