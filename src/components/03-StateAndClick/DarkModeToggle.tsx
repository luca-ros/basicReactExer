import { useState } from "react";

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    function handleToggle() {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            margin: '10px',
            borderRadius: '8px',
            backgroundColor: isDarkMode ? '#222' : '#fff', // Se true nero, se false bianco
            color: isDarkMode ? '#fff' : '#000',           // Se true testo bianco, se false nero
            transition: 'all 0.3s ease'                    // Rende il cambio sfumato ed elegante!
        }}>
            <p>La Dark Mode è: {isDarkMode ? "Attiva 🌙" : "Disattivata ☀️"}</p>

            <button onClick={handleToggle} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                {isDarkMode ? "Passa a tema Chiaro" : "Passa a tema Scuro"}
            </button>
        </div>
    );
}

export default DarkModeToggle