import './styles.css'

const SlideWrapper = ({imgArr,activeIndex}) => {

    return (
        imgArr.map(({src,text},index) => (
            <div key={index}  className={activeIndex === index ? "active slide" : "inactive"}>
                <img src={src} alt=""  />
                <p>{text}</p>
            </div>
        ) )
    )
}

export default SlideWrapper