import { useState } from "react";

function TemperatureGauge() {
    // 1. Inizializza lo stato della temperatura a 15
    const [temp, setTemp] = useState<number>(15)

    function handleTempUp() {
        // 2. Incrementa la temperatura di 1
        setTemp(temp + 1);
    }

    function handleTempDown() {
        // 3. Abbassa temperatura di 1
        setTemp(temp - 1);
    }

    return(
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            margin: '10px',
            borderRadius: '8px',
            // 4. Se la temperatura è maggiore o uguale a 25 diventa rosso (#ffe3e3), altrimenti blu (#e6f2ff)
            backgroundColor: temp >= 25 ? '#ffe3e3' : '#e6f2ff',
            transition: 'all 0.3s ease'
        }}>
            <h2>Temperatura attuale: {temp}°C</h2>

            {/* 5. Collega il click del bottone alla funzione corretta */}
            <button onClick={handleTempUp}>Alza Temperatura 🟥</button>
            <button onClick={handleTempDown}>Abbassa Temperatura 🟦</button>
        </div>
    );
}

export default TemperatureGauge