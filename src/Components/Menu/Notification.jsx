import React from "react";
import style from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
const Notification = ({ show, message }) => {
    return (
        <div className={`${style.notification} ${show ? style.visible : style.hidden}`}>
            <p>
                <FaShoppingCart style={{ marginRight: '10px' }} />
                {message}</p>
        </div>
    );
};

export default Notification;
