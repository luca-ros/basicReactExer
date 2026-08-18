import { useState } from "react";

function VolumeControl() {
    // inizializziamo lo stato del volume a 20
    const [volume, setVolume] = useState<number>(20);

    function handleVolumeUp() {
        // aumenta il volume di 1
        setVolume(volume + 1);
    }

    function handleVolumeDown() {
        // abbassa il volume di 1
        setVolume(volume - 1)
    }
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#e2f0fe' }}>
            {/* 4. Mostra il valore del volume attuale */}
            <h2>Volume TV: { volume }</h2>

            {/* 5. Collega i due bottoni alle rispettive funzioni */}
            <button onClick={ handleVolumeUp }>Alza Volume 🔊</button>
            <button onClick={ handleVolumeDown }>Abbassa Volume 🔉</button>
        </div>
    )
}

export default VolumeControl