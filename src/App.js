import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoFeature></TodoFeature>
      {/* <AlbumFeature></AlbumFeature>
      {/* <ColorBox></ColorBox>
      <Counter /> */}
    </div>
  );
}

export default App;
