import questions from "../assets/questions";
import Question from "../components/Question";

interface QuizProps {
    currentQuestionIndex: number;
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    onNext: () => void;
}

export default function Quiz({
    currentQuestionIndex,
    selectedIndex,
    onSelect,
    onNext
}: QuizProps) {
    const total = questions.length;
    const q = questions[currentQuestionIndex];
    const isLast = currentQuestionIndex === total - 1;

    return (
        <main className="container">
            <Question
                question={q}
                currentIndex={currentQuestionIndex}
                total={total}
                selectedIndex={selectedIndex}
                onSelect={onSelect}
                onNext={onNext}
                isLast={isLast}
            />
        </main>
    );
}
