export default function Quiz({ questions }) {
  function handelSelect(e) {

  }

  return (
    <div className="Quiz">
      <h4>{questions.question}</h4>

      <div className="options">
        {questions.options.map((option) => (
          <button
            className="btn btn-option"
            key={option}
            onClick={handelSelect}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}