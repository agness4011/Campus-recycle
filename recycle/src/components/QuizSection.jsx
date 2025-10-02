// src/components/QuizSection.jsx
import React from "react";

function QuizSection({ onOpenQuiz }) {
  return (
    <section className="quiz-section">
      <div className="container">
        <h2>분리배출 퀴즈</h2>
        <p>분리배출에 대한 지식을 테스트해보세요!</p>
        <button className="quiz-button" onClick={onOpenQuiz}>
          퀴즈 풀기
        </button>
      </div>
    </section>
  );
}

export default QuizSection;
