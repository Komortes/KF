import React from "react";
import style from './style.module.css'

const Main = (params) => {
    return (
        <div>
            <div className={style.item}>
                <img className={style.itemImg} src={params.imgSrc} alt="" />
                <div className={style.itemText}>
                    <h3 className={style.itemTitle}>{params.h3Text}</h3>
                    <p className={style.itemDesc}>{params.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Main