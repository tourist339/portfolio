import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import "../css/home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../js/homepage_colors.js'
import LargeProject from "./LargeProject";
import projects from "../projects.json"

// ..
AOS.init();
const Home = (props) => {

    return (
    <>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>


        <div className="home-bg container-color"></div>

        <div className="home-start container" >
            <img id="laptop-img" src="imgs/laptop_clipart.png"></img>
            <img id="coffee-img" src="imgs/coffee_clipart.png"></img>
            <img id="headphone-img" src="imgs/headphones_clipart.png"></img>
            <div className="typewriter">
                {/*<h1>Abigail Aunjoli Lindiwe Babtjie Tshijuka Kayembe</h1>*/}
                <h1>Representing ...</h1>
            </div>
        </div>

            <div className="projects container" id="projects">

                <div id="project-slides">

                        {projects.map(p=>{
                            return <LargeProject
                                          title={p.title}
                                          imgs={p.imgs}
                                          sidebar_name={p.sidebar_name}
                                          description={p.description}
                                          sidebarName={p.sidebarName}
                                          description={p.description}
                                          backgroundColor={[p.backgroundColor]}
                            />
                        })}

                </div>
                <div id="project-sidebar">
                    <div  data-aos="fade-left" data-aos-duration="1300"  data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
                        <p className="text-heading">Projects</p>
                    </div>
                    {projects.map(p=>{
                        return <div data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"  data-aos-anchor={"."+p.sidebarName} data-aos-once="true">
                                <p className="text-mid-heading project-name">{p.sidebarName}</p>
                        </div>
                    })}

                </div>


            </div>
    </>

)};

export default Home;