import Callback from "./components/Callback";
import Context from "./components/Context";
import Memo from "./components/Memo";
import Navbar from "./components/Navbar";
import Reducer from "./components/Reducer";
import Ref from "./components/Ref";
import State from "./components/State";
import Todo from "./components/Todo";
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
        <Memo />
        <Context />
        <Reducer />
        <Todo />
        <Callback />
      </div>
    </div>
  );
};

export default App;
