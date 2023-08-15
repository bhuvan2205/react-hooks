import { useDeferredValue, useMemo, useState } from "react";

const DefferedValue = () => {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const LIST_SIZE = 10000000;
  const list = useMemo(() => {
    const dataList= [];
    for (let i= 0; i < LIST_SIZE; i++) {
      dataList.push(deferredName);
    }
    return deferredName;
  }, [deferredName]);


  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh] ">
        <div className="w-[50%] overflow-scroll">
          <input
            type="text"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <p className="p-2">{list}</p>
        </div>
        <div className="w-[50%] ">
          <h1 className="text-2xl font-bold uppercase">Use Deffered value</h1>
        </div>
      </div>
    </>
  );
};

export default DefferedValue;
