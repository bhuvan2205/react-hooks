import Callback from "./components/Callback";
import Context from "./components/Context";
import CustomHook from "./components/CustomHook";
import DefferedValue from "./components/DefferedValue";
import MeasureBox from "./components/LayoutEffect";
import Memo from "./components/Memo";
import Navbar from "./components/Navbar";
import Reducer from "./components/Reducer";
import Ref from "./components/Ref";
import State from "./components/State";
import Todo from "./components/Todo";
import useDarkTheme from "./hooks/useDarkTheme";

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
        <CustomHook />
        <MeasureBox />
        <DefferedValue />
      </div>
    </div>
  );
};

export default App;
