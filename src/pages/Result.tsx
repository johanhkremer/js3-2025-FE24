import { Link } from "react-router";
import questions from "../assets/questions";

interface ResultProps {
    score: number;
    onRestart: () => void;
}

export default function Result({ score, onRestart }: ResultProps) {
    const total = questions.length;

    return (
        <main className="container">
            <h1>Resultat</h1>
            <p className="spacer-sm text-lg">
                Du fick <strong>{score}</strong> av <strong>{total}</strong> rätt.
            </p>

            <Link to="/" onClick={onRestart} className="btn btn-primary spacer-lg">
                Spela igen
            </Link>
        </main>
    );
}
