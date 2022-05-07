import { useEffect, useState } from "react"
import Arrow from "./Arrow"
import Dots from "./Dots"
import SlideWrapper from "./SlideWrapper"
import "./styles.css"

const Slide = ({imgArr,animation}) => {

    const [activeIndex,setActiveIndex] = useState(0)

    let len = imgArr.length - 1

    useEffect(() => {
        if (!(animation === "auto")) return 
        const interval = setTimeout( 
            () => activeIndex > len - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1) 
            , 2000)
        return () => clearInterval(interval)
    },[activeIndex,len,animation])


    const onPrev = () => {
        activeIndex === 0 ? setActiveIndex(len) : setActiveIndex(activeIndex - 1) 
    }

    const onNext = () => {
        activeIndex > len-1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1) 
    }

    const handleDotClick = (currIndex) => {
        setActiveIndex(currIndex)
    }

    return(
       <div className="banner">
           <Arrow onPrev={onPrev} onNext={onNext} />
           <SlideWrapper imgArr = {imgArr} activeIndex={activeIndex} />
           <Dots imgArr = {imgArr} activeIndex={activeIndex} handleDotClick={handleDotClick} />
       </div>
    )
} 


export default Slide