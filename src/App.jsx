import Context from "./components/context";
import Navbar from "./components/navbar";
import Reducer from "./components/reducer";
import Ref from "./components/ref";
import State from "./components/state";
import Todo from "./components/todo";
import { useDarkTheme } from "./context/theme";

const App = () => {
  const darkTheme = useDarkTheme();
  const theme = darkTheme === true ? "dark" : "light";
  return (
    <div data-theme={theme}>
      <Navbar />
      <div className="container mx-auto overflow-x-hidden">
        <State />
        <Ref />
        <Context />
        <Reducer />
        <Todo />
      </div>
    </div>
  );
};

export default App;
