
import React, { useState } from "react";
import styles from "../styles/prompt.module.css";

export default function AnimalPrompt() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();

    async function onSubmit(event) {
        event.preventDefault();
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
        <h3>Draw an animal!</h3>
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
        <div className={styles.result}>{result}</div>
      </main>
        </div>
    )
}