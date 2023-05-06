import React from "react";
import style from './style.module.css'
import clock from './clock.svg'
import ph from './ph.svg'

const Info = (params) => {
    return (
        <div className={style.Md}>
            <h1>Contact information</h1>
            <div className={style.Line}>
                <p className={style.AD}><span>Praha</span><br /> Na Zátorách 1625/1</p>

                <p className={style.Te}><img src={ph} /> 420 607 431 629</p>

            </div>
            <h1>Work Schedule</h1>
            <div className={style.Line2}>

                <p className={style.Ti}><img src={clock} />  from 10-00 to 22-00</p>
            </div>

            <iframe className={style.Map} src="https://storage.googleapis.com/maps-solutions-b2krybnpj1/locator-plus/rjr7/locator-plus.html"
                width="100%" height="100%"
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Info