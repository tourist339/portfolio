import React, {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import "../css/home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import '../js/homepage_colors.js'
import LargeProject from "./LargeProject"
import projects from "../projects.json"
import SmallProject from "./SmallProject"

// ..
AOS.init();
const Home = (props) => {

    const sidebar=useRef(null)
    const projectsbar=useRef(null)
    const [toFixSidebar,setToFixSidebar]=useState(false)
    const [sidebarWidth,setSidebarWidth]=useState(0)
    const [projectbarWidth,setProjectbarWidth]=useState(0)

    useEffect(()=>{

        if(sidebarWidth!=0&&projectbarWidth!=0){
        window.addEventListener("scroll",e=>{
            // if(window.scrollY>sidebar.po
            console.log(projectsbar.current.getBoundingClientRect().bottom,window.innerHeight)
            console.log(window.scrollY)
            if(projectsbar.current.getBoundingClientRect().bottom<=window.innerHeight){
                if(sidebar.current.style.position!="absolute")
                    sidebar.current.style.top=window.scrollY-window.innerHeight+"px"
                sidebar.current.style.position="absolute"

            }
            else if(projectsbar.current.getBoundingClientRect().top<=0){
                // sidebar.current.
                setToFixSidebar(true)
                sidebar.current.style.top="0px"
                sidebar.current.style.position="fixed"

                sidebar.current.style.width=sidebarWidth+"px"
                projectsbar.current.style.width=projectbarWidth+"px"

            }else{
                sidebar.current.style.position="relative"
                sidebar.current.style.display="block"
                sidebar.current.style.flex="1"

                setToFixSidebar(false)
            }


        })
            }
    },[sidebarWidth,projectbarWidth])
    useEffect(()=>{
        setSidebarWidth(sidebar.current.getBoundingClientRect().width)
        setProjectbarWidth(projectsbar.current.getBoundingClientRect().width)
    },[sidebar,projectsbar])
    return (
    <>
        <Helmet>
            <title>Kartik Kapoor</title>
        </Helmet>



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

                <div id="project-slides" ref={projectsbar} className={`${toFixSidebar?"project-fixed":"project-scroll"}`}>

                        {projects.largeprojects.map(p=>{
                            return <LargeProject
                                          key={p.title}
                                          title={p.title}
                                          res={p.res}
                                          stack={p.stack}
                                          description={p.description}
                                          sidebarName={p.sidebarName}
                                          backgroundColor={[p.backgroundColor]}
                            />
                        })}

                </div>
                <div ref={sidebar} className={`${toFixSidebar?"sidebar-fixed":"sidebar-scroll"}`} id="project-sidebar">
                    <div  data-aos="fade-left" data-aos-duration="1300"  data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
                        <p className="text-heading">Projects</p>
                    </div>
                    {projects.largeprojects.map(p=>{
                        return <div key={p.title} data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"  data-aos-anchor={"."+p.sidebarName} data-aos-once="true">
                                <p className="text-mid-heading project-name">{p.sidebarName}</p>
                        </div>
                    })}

                </div>

            </div>


            <div id="small-projects-container">
                <h1 className="text-heading">Other Projects</h1>
                {projects.smallprojects.map(p=>{
                    return <SmallProject
                        key={p.title}
                        title={p.title}
                        res={p.res}
                        stack={p.stack}
                        description={p.description}
                        sidebarName={p.sidebarName}
                        backgroundColor={[p.backgroundColor]}
                    />
                })}
            </div>
    </>

)};

export default Home;