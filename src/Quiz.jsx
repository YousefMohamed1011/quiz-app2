export default function Quiz({ questions, dispatch, answer }) {
  return (
    <div className="Quiz">
      <h4>{questions.question}</h4>

      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''}`}
            disabled={answer}
            key={option}
            onClick={() => { console.log(option), dispatch({ type: 'newAnswer', payload: index }) }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}