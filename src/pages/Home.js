import React from 'react';
import { Link } from "react-router-dom";
import aaloparatha from '../images/aaloparatha.jpg'

export default function HomeScreen() {
    return (
        <div className='cont2'>
           
            <div>
            <div className="heading1">The MOM's FLAVOUR</div>
            <div className="heading2">Food That Takes You back Home &#127968;</div>

            <div className="subhead">Delicious Food is Just One Order Away</div>
            <div className="subhead2">Order Now & food will be at your doorstep in 30 minutes</div>
            <div className="heading3">Missing Home-made Food?? <button className="orderbtn"><Link to="/services">Order Now</Link></button></div>
            </div>
            <div><img src={aaloparatha} alt="" className="img1" /></div>
        </div>
    )
}
