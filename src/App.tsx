import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import { useState } from "react";
import questions from "./assets/questions"
import "./styles.css"

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedIndex(null);
    setScore(0);
  };

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);

    const isCorrect = index === questions[currentQuestionIndex].correctIndex;
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex >= questions.length - 1) return;
    setCurrentQuestionIndex((i) => i + 1);
    setSelectedIndex(null);
  };

  return (
    <Routes>
      <Route path="/" element={<Home onStart={resetQuiz} />} />
      <Route
        path="/quiz"
        element={
          <Quiz
            currentQuestionIndex={currentQuestionIndex}
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        }
      />
      <Route
        path="/result"
        element={<Result score={score} onRestart={resetQuiz} />}
      />
    </Routes>
  );
}