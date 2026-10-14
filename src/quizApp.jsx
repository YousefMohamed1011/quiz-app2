import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";

export default function QuizApp({ questions, status, dispatch, index, answer, points }) {
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} questions={questions} />
        )}
        {status === "active" && questions[index] && (
          <Quiz
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
            points={points}
            index={index}
            numQuestions={numQuestions}
            maxPossiblePoints={maxPossiblePoints}
          />
        )}
      </Main>
    </div>
  );
}

