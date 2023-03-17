import Link from "next/link"
import RandomImage from "../components/RandomImage"

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