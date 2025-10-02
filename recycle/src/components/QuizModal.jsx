// src/components/QuizModal.jsx
import React, { useState } from "react";

const quizData = [
  { question: "사용한 휴지는 재활용이 가능하다.", answer: "X" },
  { question: "투명 페트병은 라벨을 제거하고 버려야 한다.", answer: "O" },
  { question: "음식물이 묻은 종이 박스는 재활용할 수 없다.", answer: "O" },
];

function QuizModal({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuiz = quizData[currentIndex];
  const isCorrect = selectedAnswer === currentQuiz.answer;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quizData.length);
  };

  const handleClose = () => {
    setSelectedAnswer(null);
    setCurrentIndex(0);
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>
          ×
        </button>
        <h2>🧐 분리배출 O/X 퀴즈</h2>
        <p>{currentQuiz.question}</p>

        {!selectedAnswer ? (
          <div className="quiz-options">
            <button onClick={() => handleAnswer("O")}>O</button>
            <button onClick={() => handleAnswer("X")}>X</button>
          </div>
        ) : (
          <div>
            <div
              className={`quiz-result-message ${
                isCorrect ? "correct" : "wrong"
              }`}
            >
              {isCorrect
                ? "정답입니다! 🎉"
                : `틀렸어요. 정답은 ${currentQuiz.answer} 입니다.`}
            </div>
            <button className="next-quiz-button" onClick={handleNext}>
              다음 문제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizModal;
