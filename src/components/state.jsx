import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-between my-20 min-h-[30vh]">
      <h1 className="text-2xl font-bold uppercase">Use State</h1>
      <div className="flex items-center">
        <button
          className="btn btn-primary"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Increment
        </button>
        <p className="px-4">
          Count is{" "}
          <span className="badge badge-accent p-2 font-bold"> {count} </span>
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => setCount((prevState) => prevState - 1)}
        >
          Decremet
        </button>
      </div>
    </div>
  );
};

export default State;
