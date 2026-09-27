import { useReducer } from "react";

const initialCount = {
  count: 0,
  step: 1,
}

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };

    case "inc":
      return { ...state, count: state.count + 1 };

    case "setCount":
      return action.payload;

    case "reset":
      return initialCount;

    default:
      return state;
  }
}

function DateCounter() {

  const [state, dispatch] = useReducer(reducer, initialCount);
  const { count, step } = state


  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function dec() {
    dispatch({
      type: "dec",
      payload: step,
    });
  }

  function inc() {
    dispatch({
      type: "inc",
      payload: step,
    });
  }

  function defineCount(e) {
    dispatch({
      type: "setCount",
      payload: Number(e.target.value),
    });
  }

  function defineStep(e) {
    setStep(Number(e.target.value));
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>

        <input
          type="number"
          value={count}
          onChange={defineCount}
        />

        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default DateCounter;