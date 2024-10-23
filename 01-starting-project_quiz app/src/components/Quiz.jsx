import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizeCompleteImg from "../assets/quiz-complete.png";
import Timer from "./Timer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizeIsComplete = activeQuestionIndex === QUESTIONS.length;

  const hadleSelectAnswer = useCallback(function hadleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => hadleSelectAnswer(null),
    [hadleSelectAnswer]
  );

  if (quizeIsComplete) {
    return (
      <div id="summary">
        <img src={quizeCompleteImg} alt="Trophy icon" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <Timer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <div />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => hadleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
