// 1. Importa la funzione formatPrice dalla cartella utils
import { formatPrice } from "../../utils/formatters";

type ProductCardProps = {
    title: string;
    price: number;
    isAvailable: boolean;
};

function ProductCard(props: ProductCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            <h1>{props.title}</h1>
            {/* 2. Usa la funzione importata per avvolgere il prezzo numerico */}
            <p>Prezzo: {formatPrice(props.price)}</p>
            <p>Stato: {props.isAvailable ? "Disponibile" : "Non disponibile"}</p>
        </div>
    );
}

// 3. Esporta il componente come predefinito per risolvere l'errore in App.tsx
export default ProductCard;