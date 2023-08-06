import { useState,useRef } from 'react';
import clsx from 'clsx';

import StyleDay from './day.module.css'
import StyleNight from './night.module.css'


function Toggle() {
    const [state, setState] = useState(false);

    let style = useRef(StyleDay);

    const changeButton = () => {  
        style.current = state ? StyleDay : StyleNight;
        setState(!state);
    };

    return (
        <div className= { style.current.bground }>
        <div className={ style.current.buttonFrame } onClick= { changeButton }>
            <div className={ style.current.shineLarge }>
                <div className={ style.current.shineMedium }>
                    <div className={ style.current.shineSmall }>
                    <div className={ clsx(style.current.layerA, style.current.cloud1) }></div>
                    <div className={ clsx(style.current.layerA, style.current.cloud2) }></div>
                    <div className={ clsx(style.current.layerA, style.current.cloud3) }></div>
                    <div className={ clsx(style.current.layerA, style.current.cloud4) }></div>
                    <div className={ clsx(style.current.layerA, style.current.cloud5) }></div>
                    <div className={ clsx(style.current.layerA, style.current.cloud6) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud7) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud8) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud9) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud10) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud11) }></div>
                    <div className={ clsx(style.current.layerB, style.current.cloud12) }></div>
                    <div className={ style.current.sunMoon }></div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default Toggle;