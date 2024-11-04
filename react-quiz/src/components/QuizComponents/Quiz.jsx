import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import QuizTitle from "./QuizTitle";

export function Quiz() {
  return (
    <section id="quiz-container">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </section>
  );
}
