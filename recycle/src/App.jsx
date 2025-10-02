// src/App.jsx
import React, { useState } from "react"; // useState import
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import QuizSection from "./components/QuizSection";
import Footer from "./components/Footer";
import QuizModal from "./components/QuizModal"; // QuizModal import

function App() {
  // 모달의 상태를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달을 여는 함수
  const openModal = () => setIsModalOpen(true);

  // 모달을 닫는 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <main className="container">
        <BlogList />
      </main>
      {/* 퀴즈 섹션을 푸터 위에 배치 */}
      <QuizSection onOpenQuiz={openModal} />
      <Footer />
      {/* QuizModal에 상태와 닫는 함수를 props로 전달 */}
      <QuizModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
