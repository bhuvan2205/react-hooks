import { useReducer, useState } from "react";
import { TODO_ACTIONS } from "../constants/actions";

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD: {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
      };
      return {
        todos: [...state.todos, todo],
      };
    }

    case TODO_ACTIONS.DELETE: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD, payload: { title: todo } });
    console.log({ todo });
    setTodo("");
  };
  return (
    <div className="flex items-center justify-between my-20 w-full">
      <div>
        <h1 className="text-2xl font-bold uppercase">
          TODO <br />
          Use Reducer
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo"
            className="input input-bordered w-full max-w-xs"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
        <div className="mt-4">
          {state.todos &&
            state.todos.map((item) => {
              return (
                <div key={item?.id}>
                  <span
                    className="pb-2 text-lg text-center block"
                    onClick={() =>
                      dispatch({
                        type: TODO_ACTIONS.DELETE,
                        payload: { id: item?.id },
                      })
                    }
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
