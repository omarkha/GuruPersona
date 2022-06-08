import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
    <div className="App"
    >
      <Header />
      <NavBar />
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>   
    </div>
    </Router>
  );
}

export default App;
