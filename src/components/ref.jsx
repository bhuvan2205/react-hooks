import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [name, setName] = useState();
  const inputRef = useRef();
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh]">
        <div>
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-60"
          />
          <div className="py-4">Type to see the input value</div>
          <p>
            Value from useState:{" "}
            <span className="text-secondary font-bold text-lg"></span>
            {name}
          </p>
          <p>
            Value from useRef:{" "}
            <span className="text-info font-bold text-lg"></span>
            {inputRef?.current?.value}
          </p>
          <p>Component renders {renderCount.current} times</p>
        </div>
        <h1 className="text-2xl font-bold uppercase">Use Ref</h1>
      </div>
    </>
  );
};

export default Ref;
