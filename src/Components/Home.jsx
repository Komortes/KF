import React, { useRef } from 'react';
import Main_Prop from './Main_Prop/Main';
import Serve from './Serve/Serve';
import Menu from './Menu/Menu.jsx';
import scrollIntoView from 'scroll-into-view';

const Home = ({ addToCart }) => {
    const menuRef = useRef(null);

    const scrollToMenu = () => {
        scrollIntoView(menuRef.current, {
            time: 1000,
            align: {
                top: 0
            }
        });
    };

    return (
        <div>
            <Main_Prop onButtonClick={scrollToMenu} />
            <Serve />
            <div ref={menuRef}>
                <Menu addToCart={addToCart} />
            </div>
        </div>
    );
};

export default Home;
