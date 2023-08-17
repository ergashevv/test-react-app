import "./assets/styles/main.scss";
import Header from "./components/header";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
