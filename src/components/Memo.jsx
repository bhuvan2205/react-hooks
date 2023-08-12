import { useMemo, useState } from "react";
import { squaredNumber } from "../utils/getSquare";

const Memo = () => {
  const [num, setNum] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const squaredNum = useMemo(() => {
    return squaredNumber(num);
  }, [num]);
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh]">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Number"
              className="input input-bordered w-full max-w-xs"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </form>

          {num && (
            <div className="my-2">
              <span className="text-center block">{squaredNum}</span>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">Use Memo</h1>
        </div>
      </div>
    </>
  );
};

export default Memo;
