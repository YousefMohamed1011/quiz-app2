import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";
import { Icon } from "./Icons";
export default function QuizApp({ questions, status, dispatch,index }) {
  return (
    <div className="quiz-app">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} questions={questions} />
        )}
        {status === "active" && <Quiz questions={questions[index]} />}
      </main>
      <footer className="app-footer">
        <span>Made for curious minds. Built with React.</span>
        <span>
          <Icon name="code" size={15} /> Keep learning. Keep building.
        </span>
      </footer>
    </div>
  );
}
