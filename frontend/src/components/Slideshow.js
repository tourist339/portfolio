import React from 'react';
import LargeProject from "./LargeProject";
import "../css/slideshow.css"
const Slideshow = (props) => {

    let imgs=[]


    return(
        <div className="slideshow">
            {/*<div className="slideshow-obj">A</div>*/}
            {/*<div className="slideshow-obj">B</div>*/}
            {/*<div className="slideshow-obj">C</div>*/}
            {/*<div className="slideshow-obj">D</div>*/}
            {
            props.imgs.map((img_src)=>(<img src={"imgs/"+img_src}></img>))
        }
        </div>

    )
}

export default Slideshow;