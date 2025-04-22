import React, { useState } from 'react';

const QuizInteractif = () => {
  const questions = [
    { texte: "React est un framework.", reponse: false },
    { texte: "useState permet de gérer l'état.", reponse: true },
    { texte: "JSX est une extension CSS.", reponse: false },
    { texte: "Le Virtual DOM est plus rapide.", reponse: true }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (userAnswer) => {
    const correct = questions[currentIndex].reponse === userAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrentIndex(currentIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowFeedback(false);
  };

  if (currentIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz terminé !</h2>
        <p>Score: {score}/{questions.length}</p>
        <button onClick={restartQuiz}>Recommencer</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {currentIndex + 1}/{questions.length}</h2>
      <p>{questions[currentIndex].texte}</p>
      
      {!showFeedback ? (
        <div>
          <button onClick={() => handleAnswer(true)}>Vrai</button>
          <button onClick={() => handleAnswer(false)}>Faux</button>
        </div>
      ) : (
        <div>
          <p>{isCorrect ? "Bonne réponse !" : "Mauvaise réponse !"}</p>
          <button onClick={nextQuestion}>Question suivante</button>
        </div>
      )}
    </div>
  );
};

export default QuizInteractif;
