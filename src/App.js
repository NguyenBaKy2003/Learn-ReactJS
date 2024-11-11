import { Routes, Switch, Route, Link, NavLink } from "react-router-dom";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">albums</Link>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">albums</NavLink>
      </p>
      <Routes>
        <Route path="/todos" Component={TodoFeature} />
        <Route path="/albums" Component={AlbumFeature} />
      </Routes>

      {/* <AlbumFeature></AlbumFeature>
      {/* <ColorBox></ColorBox>
      <Counter /> */}
    </div>
  );
}

export default App;
