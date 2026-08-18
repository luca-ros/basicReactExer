import { useState } from "react";


function AccountSelector() {
    const [accountType, setAccountType] = useState<string>("Seleziona Account");

    function handleContoCorrente() {
        setAccountType("Conto Corrente")
    }
    function handleContoSavings() {
        setAccountType("Conto Savings")
    }

    return (
        <div>
            <h1 style={{ backgroundColor: accountType === "Conto Corrente" ? "#bec486" : "#748bb8" }}>{accountType}</h1>
            <button onClick={handleContoCorrente}>Conto corrente</button>
            <button onClick={handleContoSavings}>Savings</button>
        </div>
    )
}

export default AccountSelector