import "./styles.css"

const Dots = ({imgArr,activeIndex,handleDotClick}) => {
    return(
        <div className="dots">
            {
                imgArr.map((_,index) => (
                    <span key={index} className={activeIndex === index ? "dot active-dot" : "dot"}
                    onClick={() => handleDotClick(index)}
                    ></span>
                ))
            }
        </div>
    )
}

export default Dots