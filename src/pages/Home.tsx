import { Link } from "react-router";

interface HomeProps {
    onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
    return (
        <main className="container">
            <h1>React Quiz – Träningsuppgift</h1>
            <p className="spacer-sm">
                Träna på komponenter, <code>useState</code>, conditional rendering,
                props och <code>react-router-dom</code>.
            </p>

            <ul className="spacer-sm">
                <li>Minst 6 frågor från en lokal array.</li>
                <li>Välj ett alternativ → se feedback (rätt/fel).</li>
                <li>“Nästa fråga” aktiveras först efter val.</li>
                <li>Resultat visas efter sista frågan.</li>
            </ul>

            <Link to="/quiz" onClick={onStart} className="btn btn-accent spacer-lg">
                Starta quiz
            </Link>
        </main>
    );
}
