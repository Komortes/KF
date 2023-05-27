import React from "react";
import MenuItem from "./Menu_item";
import style from "./style.module.css";
import { useState, useEffect } from 'react';

import Notification from './Notification';


const Main = ({ addToCart }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const addToCartHandler = (item) => {
        addToCart(item);
        const newNotification = { id: Date.now(), message: `Item added to the cart` };
        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
        setTimeout(() => {
            setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== newNotification.id));
        }, 2000);
    };
    useEffect(() => {
        const url = "https://kfc-chickens.p.rapidapi.com/chickens";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "85ed7c2b34mshb5926f1b7121133p1d9d95jsndfd081f82891",
                "X-RapidAPI-Host": "kfc-chickens.p.rapidapi.com",
            },
        };

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
            .catch((error) => console.error(error));
    }, []);

    if (!Array.isArray(menuItems)) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.Mn}>
            <div className={style.grid}>
                {menuItems.map((menuItem) => (
                    <MenuItem
                        key={menuItem.id}
                        imgSrc={menuItem.image}
                        itemText={menuItem.name}
                        price={menuItem.price}
                        addToCart={() => addToCartHandler(menuItem)}
                    />
                ))}
            </div>


            {notifications.map(notification =>
                <Notification
                    key={notification.id}
                    show={true}
                    message={notification.message}
                />
            )}
        </div>
    );
};

export default Main;