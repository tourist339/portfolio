import Slideshow from "./Slideshow";
import LinkBar from "./LinkBar";
import "css/smallproject.css"
const SmallProject=(props)=>{
    return(
        <div className="small-project" style={{backgroundColor:props.backgroundColor}}>

            <Slideshow res={props.res}></Slideshow>

            <button className={"sp-menu text-medium"}><i className={"fa fa-bars"}></i></button>
            <button className={"sp-links"}><i className={"fa fa-link"}></i></button>
            <div className="sp-title">{props.title}</div>
        </div>
    )
}
export default SmallProject