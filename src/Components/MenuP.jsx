import React from 'react';
import style from './style_emp.module.css'
import Full_Menu from './Full_Menu/Menu.jsx'

const MenuP = ({ addToCart }) => {
    return (
        <div>
            <Full_Menu addToCart={addToCart} />
        </div>
    );
};

export default MenuP;
