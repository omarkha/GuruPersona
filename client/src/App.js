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
import Images from "./images";
// Tests
import Sensing_vs_Intuition from "./components/Tests/Xxxx-Tests/Sensing_vs_Intuition";
import Thinking_vs_Feeling from "./components/Tests/Xxxx-Tests/Thinking_vs_Feeling";
import Extraversion_vs_Introversion from "./components/Tests/Xxxx-Tests/Extraversion_vs_Introversion";
import Judging_vs_Percieving from "./components/Tests/Xxxx-Tests/Judging_vs_Percieving";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/tests" element={<Tests />} />
          {/* Tests */}
          <Route
            path="/sensing_vs_intuition"
            element={<Sensing_vs_Intuition />}
          />
          <Route
            path="/thinking_vs_feeling"
            element={<Thinking_vs_Feeling />}
          />
          <Route
            path="/judging_vs_percieving"
            element={<Judging_vs_Percieving />}
          />
          <Route
            path="/extraversion_vs_introversion"
            element={<Extraversion_vs_Introversion />}
          />
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
