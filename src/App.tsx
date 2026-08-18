
// Sezione 1: Importiamo i componenti dalle Props Classiche
import ProductCard from "./components/01-PropsClassiche/ProductCard";
import CityCard from "./components/01-PropsClassiche/CityCard";

// Sezione 2: Importiamo il componente con il Destructuring
import PostCard from "./components/02-Destructuring/PostCard";

// Sezione 3: Importiamo i componenti con Stato e Click
import DislikeCounter from "./components/03-StateAndClick/DislikeCounter";
import ScoreBoard from "./components/03-StateAndClick/ScoreBoard";
import VolumeControl from "./components/03-StateAndClick/VolumeControl";
import DarkModeToggle from "./components/03-StateAndClick/DarkModeToggle";
import TemperatureGauge from "./components/03-StateAndClick/TemperatureGauge";
import BankCounter from "./components/03-StateAndClick/BankCounter";
import AccountSelector from "./components/03-StateAndClick/AccountSelector";


function App() {
    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Esercizi React</h1>

            <hr style={{ margin: '20px 0' }} />

            <h2>Sezione 1: Props Classiche</h2>
            <ProductCard title="Specchio" price={89} isAvailable={true} />
            <CityCard name="Roma" population={2800000} />

            <hr style={{ margin: '20px 0' }} />

            <h2>Sezione 2: Destructuring</h2>
            <PostCard title="Post Settimanale" likes={42} isPublished={true} />

            <hr style={{ margin: '20px 0' }} />

            <h2>Sezione 3: Stato e Click</h2>
            <DislikeCounter />
            <ScoreBoard />
            <VolumeControl />
            <DarkModeToggle />
            <TemperatureGauge />
            <BankCounter />
            <AccountSelector />
        </div>
    )
}

export default App;