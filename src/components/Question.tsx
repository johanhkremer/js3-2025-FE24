import { Link } from "react-router";
import OptionButton from "./OptionButton";
import Progress from "./Progress";

interface QuestionShape {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
}

interface QuestionProps {
    question: QuestionShape;
    currentIndex: number;
    total: number;
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    onNext: () => void;
    isLast: boolean;
}

export default function Question({
    question,
    currentIndex,
    total,
    selectedIndex,
    onSelect,
    onNext,
    isLast
}: QuestionProps) {
    const hasSelected = selectedIndex !== null;
    const isCorrect = hasSelected ? selectedIndex === question.correctIndex : null;

    return (
        <div className="container">
            <Progress current={currentIndex} total={total} />
            <h2>{question.text}</h2>

            <div className="options">
                {question.options.map((opt, i) => (
                    <OptionButton
                        key={i}
                        text={opt}
                        isSelected={selectedIndex === i}
                        disabled={hasSelected}
                        onClick={() => onSelect(i)}
                    />
                ))}
            </div>

            {hasSelected && (
                <p className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
                    {isCorrect ? "Rätt!" : "Fel!"}
                </p>
            )}

            <div className="spacer">
                {isLast ? (
                    hasSelected ? (
                        <Link to="/result" className="btn btn-primary">
                            Visa resultat
                        </Link>
                    ) : (
                        <button className="btn btn-primary" disabled>
                            Visa resultat
                        </button>
                    )
                ) : (
                    <button className="btn btn-primary" onClick={onNext} disabled={!hasSelected}>
                        Nästa fråga
                    </button>
                )}
            </div>
        </div>
    );
}
