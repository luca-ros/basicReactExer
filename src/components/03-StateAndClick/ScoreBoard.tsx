import {useState} from "react";
import { INITIAL_SCORE, SCORE_BONUS } from '../../constants/gameConstants';

function ScoreBoard() {
    const [score, setScore] = useState<number>(INITIAL_SCORE);

    function handleIncreaseScore() {
        // 1. Usa SCORE_BONUS per aumentare il punteggio attuale
        setScore(score + SCORE_BONUS);
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px', backgroundColor: '#f0fff4' }}>
            {/* 2. Mostra la variabile del punteggio attuale */}
            <h2>Punteggio Gioco: {score}</h2>
            {/* 3. Collega la funzione al click del bottone */}
            <button onClick={handleIncreaseScore}>Guadagna Punti 🎯</button>
        </div>
    );
}

export default ScoreBoard;