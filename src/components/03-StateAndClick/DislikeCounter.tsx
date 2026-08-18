import { useState } from "react";

function DislikeCounter() {
    // 1. Creiamo la variabile (likes) e la funzione per cambiarla (setLikes). Parte da 100.
    const [likes, setLikes] = useState<number>(100);

    function handleDislike() {
        // 2. Diciamo a React di impostare i nuovi likes a: valore attuale meno 1
        setLikes(likes - 1);
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            {/* 3. Usiamo {likes} tra le graffe per stampare il numero che cambia */}
            <h1>Likes rimanenti: {likes}</h1>

            {/* 4. Colleghiamo la funzione al click e chiudiamo correttamente il bottone */}
            <button onClick={handleDislike}>Togli un Like</button>
        </div>
    )
}

export default DislikeCounter