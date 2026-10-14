import { useEffect, useReducer } from "react";
import "./App.css";
// import DateCounter from './DateCounter'
import QuizApp from "./quizApp";
const initialvalue = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,

};
function reducer(state, action) {
  switch (action.type) {
    case "datareceved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataNotFound":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      throw new Error("Unknown action");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const { questions, status, index, answer, points } = state;
  useEffect(() => {
    async function GetQusetions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("Faild Get Data ");
        const data = await res.json();
        dispatch({ type: "datareceved", payload: data });
        console.log(data);
      } catch {
        dispatch({ type: "dataNotFound" });
      }
    }
    GetQusetions();
  }, []);
  return (
    // <DateCounter/>
    <QuizApp questions={questions} status={status} dispatch={dispatch} index={index} answer={answer} points={points} />
  );
}

export default App;
