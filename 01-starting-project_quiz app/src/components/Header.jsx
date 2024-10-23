import img1 from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={img1} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
