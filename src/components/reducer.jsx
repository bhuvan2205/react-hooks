import { useReducer } from "react";
import { COUNTER_ACTIONS } from "../constants/actions";

function reducer(state, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="flex items-center justify-between my-20 w-full min-h-[30vh]">
      <div className="flex items-center">
        <button
          className="btn btn-primary cursor-pointer"
          onClick={() => dispatch({ type: COUNTER_ACTIONS.DECREMENT })}
        >
          Decrement
        </button>
        <p className="mx-3">
          Count is{" "}
          <span className="badge badge-accent p-2 font-bold">
            {" "}
            {state.count}{" "}
          </span>
        </p>
        <button
          className="btn btn-secondary cursor-pointer"
          onClick={() => dispatch({ type: COUNTER_ACTIONS.INCREMENT })}
        >
          Increment
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Use Reducer</h1>
      </div>
    </div>
  );
};

export default Reducer;
