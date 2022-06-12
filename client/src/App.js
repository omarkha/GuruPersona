import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tests from "./pages/Tests";
import Profiles from "./pages/Profiles";
import Sensing_vs_Intuition from "./components/Tests/Sensing_vs_Intuition";
import Images from "./images";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <img className="background-image" src={Images.logo_2} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tests" element={<Sensing_vs_Intuition />} />
          <Route
            path="/sensing_vs_intuition"
            element={<Sensing_vs_Intuition />}
          />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

/*
            
            <Route path="/esfj" element={<ESFJ/>} />
            <Route path="/isfj" element={<ISFJ/>} />
            <Route path="/enfj" element={<ENFJ/>} />
            <Route path="/infj" element={<INFJ/>} />
            <Route path="/esfp" element={<ESFP/>} />
            <Route path="/isfp" element={<ISFP/>} />
            <Route path="/estp" element={<ESTP/>} />
            <Route path="/istp" element={<ISTP/>} />
            <Route path="/estj" element={<ESTJ/>} />
            <Route path="/istj" element={<ISTJ/>} />
            <Route path="/entp" element={<ENTP/>} />
            <Route path="/intp" element={<INTP/>} />
            <Route path="/enfp" element={<ENFP/>} />
            <Route path="/infp" element={<INFP/>} />
            <Route path="/entj" element={<ENTJ/>} />
            <Route path="/intj" element={<INTJ/>} />

*/

export default App;
