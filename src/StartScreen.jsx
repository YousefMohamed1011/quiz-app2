

export default function StartScreen({ questions }) {
  return (
    <div className="start">
      <h1>Start the Quiz</h1>
      <p>{`${questions.length} questions test your React mastery`}</p>
    </div>
  );
}
