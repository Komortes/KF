import React from "react";
import style from "./style.module.css";

const Main = (props) => {
    return (
        <div>
        <div className={style.ItemCard}>
                <img className={style.ProdImg} src={props.imgSrc} alt=""/>
                <p className={style.itemText}>{props.itemText}</p>
                <div className={style.TLine}>
                <p className={style.itemPrice}>{props.price} $</p>
                <button className={style.AddB}>+</button>
                </div>
                
        </div>
        </div>
    )
}

export default Main;