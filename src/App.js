import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <hr style={{border: "1px solid #eee"}}/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <hr style={{border: "1px solid #eee"}}/>
        <Footer/>
      </div>   
    </Router>
  );
}

export default App;
