import React from "react";
import ServeItem from "./ServeItem.jsx";
import style from './style.module.css'
import Delivery from './Delivery.png';
import Order from './Order.png';
import Quality from './Quality.png';

const Main = (params) => {
    return (
        <div>
            <h4 className={style.desc}>What we serve</h4>
            <h2 className={style.title}>Your Favourite Food Delivery Partner</h2>
            <div className={style.items}>
                <ServeItem imgSrc={Order} h3Text={'Easy To Order'} text={'You only need a few steps in ordering food'} />
                <ServeItem imgSrc={Delivery} h3Text={'Fastest Delivery'} text={'Delivery that is always ontime even faster'} />
                <ServeItem imgSrc={Quality} h3Text={'Best Quality'} text={'Not only fast for us quality is also number one'} />
            </div>
        </div>
    )
}

export default Main