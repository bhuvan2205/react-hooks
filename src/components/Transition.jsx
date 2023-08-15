import { useState, useTransition } from "react";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
    startTransition(() => {
      const dList = [];
      for (let i = 0; i < 1000; i++) {
        dList.push(name);
      }
      setList(dList);
    });
  };
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold uppercase">Use Transition</h1>
        </div>
        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={handleChange}
          />
          <br />
          {!isPending ? (
            list.map((item, index) => (
              <span key={index} className="px-2">
                {item}
              </span>
            ))
          ) : (
            <span className="px-2">Loading..</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Transition;
