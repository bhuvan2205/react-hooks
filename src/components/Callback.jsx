import { useCallback, useState } from "react";
import List from "./List";
import { useDarkTheme, useUpdateDarkTheme } from "../context/theme";

const Callback = () => {
  const darkTheme = useDarkTheme();

  const toggleTheme = useUpdateDarkTheme();
  const btStyles = `mt-6 btn ${darkTheme == true ? "btn-secondary" : "btn-primary"}`;
  const [num, setNumber] = useState(1);
  const getNums = useCallback(() => {
    return [num, num + 1, num + 2];
  }, [num]);
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh">
        <div>
          <h1 className="text-2xl font-bold uppercase">Use Callback</h1>
          <button onClick={toggleTheme} className={btStyles}>
            Switch Theme
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Number"
            className="input input-bordered w-full max-w-xs"
            value={num}
            onChange={(e) => setNumber(e.target.value)}
          />
          <List nums={getNums} />
        </div>
      </div>
    </>
  );
};

export default Callback;
