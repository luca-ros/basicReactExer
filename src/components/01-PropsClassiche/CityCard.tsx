type CityCardProps = {
    name: string;
    population: number;
}

function CityCard(props: CityCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
            <h1>Citta: {props.name}</h1>
            <p>Popolazione:{props.population} </p>
        </div>
    );
}

export default CityCard