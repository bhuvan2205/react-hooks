import { useDarkTheme, useUpdateDarkTheme } from "../context/theme";

const Context = () => {
  const darkTheme = useDarkTheme();

  const toggleTheme = useUpdateDarkTheme();
  const btStyles = `btn ${darkTheme == true ? "btn-secondary" : "btn-primary"}`;
  return (
    <>
      <div className="flex items-center justify-between my-20 w-full min-h-[30vh">
        <div>
          <h1 className="text-2xl font-bold uppercase">Use Context</h1>
        </div>
        <button onClick={toggleTheme} className={btStyles}>
          Switch Theme
        </button>
      </div>
    </>
  );
};

export default Context;
