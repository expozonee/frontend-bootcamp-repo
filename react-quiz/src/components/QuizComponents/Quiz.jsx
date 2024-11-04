import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import QuizTitle from "./QuizTitle";

export function Quiz() {
  return (
    <div className="quiz">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}
