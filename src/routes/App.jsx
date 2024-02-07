import { Outlet } from "react-router-dom";
// import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;
