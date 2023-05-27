import React from "react";
import MenuItem from "./MenuItem";
import style from "./style.module.css";
import { useState, useEffect } from 'react';

import Notification from './Notification';


const Main = ({ addToCart }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [notifications, setNotifications] = useState([]);
    const addToCartHandler = (item) => {
        addToCart(item);
        const newNotification = { id: Date.now(), message: `Item added to the cart` };
        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
        setTimeout(() => {
            setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== newNotification.id));
        }, 2000);
    };

    useEffect(() => {

        const updateItemsPerPage = () => {
            const width = window.outerWidth;

            if (width <= 1200) {
                setItemsPerPage(3);
            } else if (width <= 1600) {
                setItemsPerPage(6);
            } else if (width <= 1990) {
                setItemsPerPage(8);
            } else if (width <= 2350) {
                setItemsPerPage(10);
            } else {
                setItemsPerPage(10);
            }
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);

    }, []);

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

    const totalPages = Math.ceil(menuItems.length / itemsPerPage);

    const handleClickPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleClickNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = menuItems.slice(startIndex, endIndex);

    return (
        <div>
            <div className={style.FL}>
                <div className={style.TBLock}>
                    <h4 className={style.FT}>Our Menu</h4>
                    <h2 className={style.ST}>menu that always make you fall in love</h2>
                </div>
                <div className={style.BBLock}>
                    <button
                        onClick={handleClickPrev}
                        disabled={currentPage === 1}
                        className={style.AddB}
                        style={{
                            backgroundColor: currentPage === 1 ? "#ccc" : "#EC6083",
                            boxShadow: currentPage === 1 ? "none" : "0px 0px 5px 5px #EC6083",
                            cursor: currentPage === 1 ? "default" : "pointer",
                        }}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleClickNext}
                        disabled={currentPage === totalPages}
                        className={style.AddB}
                        style={{
                            backgroundColor:
                                currentPage === totalPages ? "#ccc" : "#EC6083",
                            boxShadow:
                                currentPage === totalPages
                                    ? "none"
                                    : "0px 0px 5px 5px #EC6083",
                            cursor: currentPage === totalPages ? "default" : "pointer",
                        }}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className={style.grid}>
                {currentItems.map((menuItem) => (
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
