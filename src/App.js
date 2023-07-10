import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Equipment from './pages/Equipment'
import Parts from './pages/Parts'
import Supplies from './pages/Supplies'
import TechSupport from './pages/TechSupport'
import BuyingorSelling from './pages/BuyingorSelling'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/resources" exact element={<Resources/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />

          <Route path="/equipment" exact element={<Equipment/>} />
          <Route path="/parts" exact element={<Parts/>} />
          <Route path="/supplies" exact element={<Supplies/>} />
          <Route path="/techsupport" exact element={<TechSupport/>} />
          <Route path="/buyingorselling" exact element={<BuyingorSelling/>} />
        </Routes>
        <hr style={{border: "1px solid #eee"}}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
