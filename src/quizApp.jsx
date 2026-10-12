import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";

export default function QuizApp({ questions, status, dispatch, index }) {
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
          <Quiz questions={questions[index]} />
        )}
      </Main>
    </div>
  );
}
