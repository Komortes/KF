import React from "react";
import style from './style.module.css'
import burgImg from './burg.svg'

const Main = ({ onButtonClick }) => {
    return (
        <div>
            <div className={style.hello}>
                <div className={style.Text_block}>
                    <p className={style.Ft}>Be the fastest in delivering <br /> your <span>Food</span></p>
                    <p className={style.St}>We cook and deliver the tastiest food right away to your designated location</p>
                    <button className={style.Start_Btn} onClick={onButtonClick}>
                        Get Started
                    </button>

                </div>
                <img src={burgImg} className={style.MImg} alt='burg' />
            </div>
        </div>
    )
}

export default Main