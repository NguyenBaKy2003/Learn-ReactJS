import { Link, NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/idex";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import Header from "./components/Header";
// import "./App.css";
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
      <Header></Header>

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
