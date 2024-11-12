import { Routes, Switch, Route, Link, NavLink } from "react-router-dom";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import logo from "./logo.svg";
import NotFound from "./components/NotFound/idex";
import { useEffect } from "react";
// import "./App.css";
import productApi from "./api/product";
function App() {
  // useEffect(() => {
  //   let featchApi = async () => {
  //     let productsList = await productApi.getAll();
  //     console.log(productsList);
  //   };
  //   featchApi();
  // }, []);
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
        <Route Component={NotFound}></Route>
      </Routes>

      {/* <AlbumFeature></AlbumFeature>
      {/* <ColorBox></ColorBox>
      <Counter /> */}
    </div>
  );
}

export default App;
