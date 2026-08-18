import { useState } from "react";


function BankCounter() {
    const [customerCounter, setCustomerCounter] = useState<number>(0);

    function customerAdd() {
        setCustomerCounter(customerCounter + 1)
    };

    function customerServed() {
        // impedisce al contatore di andare sotto lo zero!

        if (customerCounter > 0) {
            setCustomerCounter(customerCounter - 1);
        }

    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            <h2 style={{ color: customerCounter > 5 ? "red" : "green" }}>Clienti in coda:{customerCounter}</h2>
            <button onClick={customerAdd}>Clienti in coda</button>
            <button onClick={customerServed}>Clienti Serviti</button>
        </div>
    );
}

export default BankCounter