import Link from "next/link"
import RandomImage from "../components/RandomImage"
import Navbar from "../components/Navbar"

export default function imagesPage() {
  
    return (
        <div>
            <Navbar />
            <h1>images page</h1>
            <Link href="/">back to home</Link>
<div>
    <RandomImage />
</div>

        </div>
    )
}