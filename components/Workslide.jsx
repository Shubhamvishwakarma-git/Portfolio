"use client";

import { useSwiper } from "swiper/react";
import{PiCaretLeftBold, PiCaretRightBold}from 'react-icons/pi'

const Workslide = ({containerstyle, btnstyle, iconsstyle}) => {
    const swiper = useSwiper();
  return (
    <div className={containerstyle}>
     <button className={btnstyle}>
        <PiCaretLeftBold className={iconsstyle} onClick={()=> swiper.slidePrev()}/>
     </button>
     <button className={btnstyle}>
        <PiCaretRightBold className={iconsstyle} onClick={()=> swiper.slideNext()}/>
     </button>
    </div>
  )
}

export default Workslide
