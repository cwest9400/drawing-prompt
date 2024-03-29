import { useState, useEffect } from "react"
import Loader from "./Loader"
import styles from '../styles/ImagePrompt.module.css';

function RandomImage() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function fetchImage() {
            const response = await fetch("/api/random-image");
            const data = await response.json()
            setData(data)
            setLoading(false)
        }
        fetchImage()
    }, [])

    if (isLoading) return <Loader />
    if (!data) return <p>error fetching img</p>
    const image = data.urls.regular
    const imgAlt = data.alt_description
    const photographer = data.user.name

    return (
        <div className={styles.main}>
            <img src={image} alt={imgAlt} />
            <div>
            by: {photographer}
            </div>
            
        </div>
    )

}
export default RandomImage