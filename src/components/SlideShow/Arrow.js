import "./styles.css"


const Arrow = ({onNext,onPrev}) => {
    return(
        <div className="arrow">
        <span className="prev" onClick={onPrev} >{'<'}</span>
        <span className="next" onClick={onNext}>{'>'}</span>
         </div>
    )
}

export default Arrow