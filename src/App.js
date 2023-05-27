import Home from './Components/Home';
import Contact from './Components/Contact';
import MenuP from './Components/MenuP';
import Item from './Components/Module_com/item'
import cartIcon from './Components/cart.svg';
import Footer from './Components/Footer/Footer';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Route, Link, Routes, NavLink } from 'react-router-dom';
import style from './App.css';

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const handlePayment = () => {
    setCartItems([]);
    setModalIsOpen(false);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const itemIndex = newItems.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        newItems.splice(itemIndex, 1);
      }

      return newItems;
    });
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div>
        <div>
          <header>
            <img src='https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png' class="Top_logo"></img>
            <div class="Top_btn">
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/men" activeClassName="active">Menu</NavLink>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
            <div class="Top_cntr">
              <button class="Top_cntrl" onClick={() => setModalIsOpen(true)}>
                <img src={cartIcon} alt='cart' />
              </button>
            </div>
          </header>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              color: 'black',
              width: '50%',
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              borderRadius: '3.5vmin'
            }
          }}
        >
          {cartItems.map((item) => (
            <Item removeFromCart={() => removeFromCart(item)} imgSrc={item.image} itemText={item.name} price={item.price} />
          ))}
          <div style={
            {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }>
            <p style={
              {
                fontSize: '2vmin',
                marginRight: '5vmin'
              }
            }>Total: {totalCost} $</p>
            <button onClick={handlePayment}
              style={
                {
                  backgroundColor: '#E9F3FD',
                  border: '0',
                  fontSize: '1.5vmin',
                  borderRadius: '2.5vmin',
                  height: '2.5vmin',
                  width: '8vmin'
                }
              }>Pay</button>
          </div>

        </Modal>

        <Routes>
          <Route exact path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/men" element={<MenuP addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div >
      <Footer />
    </Router >
  );
}

export default App;
