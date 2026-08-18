import { useState } from "react";

function VaultStatus() {
    const [vault, setVault] = useState<string>("CHIUSA")

    function setVaultOpen() {
        setVault("APERTA")
    }
    function setVaultClose() {
        setVault("CHIUSA")
    }

    return (
        <div>
            <h1 style={{ backgroundColor: vault === "CHIUSA" ? "red": "green"}}>Vault is: {vault}</h1>

            {vault === "CHIUSA" ? (
                // Se è chiusa, mostro il bottone per APRIRE
                <button onClick={setVaultOpen}>Apri Cassaforte</button>
            ) : (
                // Se è aperta, mostro il bottone per CHIUDERE
                <button onClick={setVaultClose}>Chiudi Cassaforte</button>
            )}

        </div >
    )
}

export default VaultStatus