import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import MenuP from './Components/MenuP';
import Reservation from './Components/Reservation';
import searchIcon from './Components/search.svg';
import cartIcon from './Components/cart.svg';
import userIcon from './Components/user.svg';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link, Routes, NavLink } from 'react-router-dom';
import style from './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <header>
            <img src='https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png' class="Top_logo"></img>
            <div class="Top_btn">
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/men" activeClassName="active">Menu</NavLink>
              <NavLink to="/re" activeClassName="active">Reservation</NavLink>
              <NavLink to="/ab" activeClassName="active">About</NavLink>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
            <div class="Top_cntr">
              <button class="Top_cntrl">
                <img src={searchIcon} alt='search' />
              </button>
              <button class="Top_cntrl">
                <img src={cartIcon} alt='cart' />
              </button>
              <button class="Top_cntrl">
                <img src={userIcon} alt='user' />
              </button>
            </div>
          </header>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/men" element={<MenuP />} />
          <Route path="/re" element={<Reservation />} />
          <Route path="/ab" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
