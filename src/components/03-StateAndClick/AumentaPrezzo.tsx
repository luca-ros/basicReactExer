import { useState } from "react";

export const AumentaPrezzo = () => {
    const [prodotti, setProdotti] = useState([
        { id: 1, nome: "Mouse", prezzo: 20 },
        { id: 2, nome: "Monitor", prezzo: 200 },
        { id: 3, nome: "Tastiera", prezzo: 80 }
    ]);

    const aumentaPrezzo = (id: number) => {
        setProdotti((prev) => {
            return prev.map((prodotto) => {
                if (prodotto.id === id) {
                    return {
                        ...prodotto,
                        prezzo: prodotto.prezzo + 10
                    };
                } else {
                    return {
                        ...prodotto
                    };
                }
            });
        });
    };

    const eliminaProdotto = (id: number) => {
        setProdotti((prev) => {
            return prev.filter((prodotto) => {
                return prodotto.id !== id;

            })


        })
    };

    return (
        <>
            {prodotti.map((prodotto) => (
                <div key={prodotto.id}>
                    <p>{prodotto.nome}: {prodotto.prezzo}€</p>
                    <button onClick={() => aumentaPrezzo(prodotto.id)}>Aumenta di 10 €</button>
                    <button onClick={() => eliminaProdotto(prodotto.id)}>Elimina Prodotto</button>

                </div>
            ))}

        </>
    );
};