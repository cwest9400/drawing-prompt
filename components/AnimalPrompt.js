
import React, { useState } from "react";
import styles from "../styles/Prompt.module.css";
import Loader from "./Loader";

export default function AnimalPrompt() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();
    const [isLoading, setLoading] = useState(false)

    async function onSubmit(event) {
        event.preventDefault();
        setLoading(true)
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ animal: animalInput }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }

            setResult(data.result);
            setLoading(false)
            setAnimalInput("");
        } catch(error) {
            console.error(error);
            alert(error.message);
        }
    }
    
    
    return (
      <div>
      <main className={styles.main}>
        <img src="" className={styles.icon} />
        <h3>Draw a creature!</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Base animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
            />
          <input type="submit" value="Generate drawing prompt" />
        </form>
        {isLoading ? (<Loader /> || "Loading...") : (
        <div className={styles.result}>{result}</div>
        )}
      </main>
        </div>
        
    )
}