import React from "react";
import style from './style.module.css'

const Footer = (params) => {
    return (
        <div className={style.Mm}>
            <div className={style.F1}>
                <img src='https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png' className={style.Logo}></img>
                <p>We cook and deliver the tastiest food right away to your designated location</p>
            </div>
            <div className={style.FT}>
                <div className={style.F2}><p className={style.BB}>About</p>
                    <p>about us</p>
                    <p>features</p>
                    <p>news</p>
                    <p>menu</p>
                </div>
                <div className={style.F3}><p className={style.BB}>Company</p>
                    <p>why burger king?</p>
                    <p>partner with us</p>
                    <p>FAQ</p>
                    <p>blog</p></div>
                <div className={style.F4}><p className={style.BB}>Support</p>
                    <p>account</p>
                    <p>support center</p>
                    <p>feedback</p>
                    <p>contact</p></div>
                <div className={style.F5}><p className={style.BB}>Get in touch</p>
                    <p>Question or feedback? Weed love to hear from you</p>
                    <input type="email" />
                </div>
            </div>

        </div>
    )
}

export default Footer