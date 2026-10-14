import Progress from "./progres";

export default function Quiz({
  question,
  questions,
  dispatch,
  answer,
  points,
  index,
  numQuestions,
  maxPossiblePoints,
}) {
  const currentQuestion = question || questions;
  const hasAnswered = answer !== null;

  return (
    <div className="Quiz">
      <Progress
        index={index}
        numQuestions={numQuestions}
        points={points}
        maxPossiblePoints={maxPossiblePoints}
        answer={answer}
      />
      <h4>{currentQuestion.question}</h4>

      <div className="options">
        {currentQuestion.options.map((option, optIndex) => (
          <button
            className={`btn btn-option ${optIndex === answer ? "answer" : ""} ${
              hasAnswered
                ? optIndex === currentQuestion.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: optIndex });
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </div>
  );
}