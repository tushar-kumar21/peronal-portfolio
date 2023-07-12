import Image from "next/image"
import { projectsData } from "@/data"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react"
export const Projects = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(()=>{
        Aos.init({
            duration:1000
        });
    },[])

    return (
        <div className="projects-container" id="portfolio">
            <h2 className="title">Projects</h2>
            {/* <div className="projects-nav">
                <span onClick={() => setIsActive(true)} className={isActive ? "active" : undefined}>All</span>
                <span onClick={() => setIsActive(false)} className={!isActive ? "active" : undefined}>Favourites</span>
            </div> */}
            <div className="projects" data-aos="fade-up">
                <div className="project">
                    <div className="project-img">
                     <img src="https://firebasestorage.googleapis.com/v0/b/newcapp-38895.appspot.com/o/Screenshot%202023-06-17%20134156.png?alt=media&token=7050853a-7f94-457e-b30f-ae3463b00c36" alt="" />
                     </div>
                     <div className="project-details">
                        <li><span>Name</span> - <span>tk4hotstar</span></li>
                        <li><span>Link</span> - <span><a href="https://tk4hotstar.vercel.app" target="_blank">Live Preview</a></span></li>  
                        <h4>Technologies -</h4>
                        <ol>
                            <li>Reactjs</li>
                            <li>Firebase</li>                            
                            <li>OMDB Api</li>
                        </ol>                   
                        <h4>Features -</h4>                                                                 
                        <ol>
                            <li>Hotstarclone is complete full stack responsive clone of original hotstar which able to perform <span>authentication</span> using <span>google and phone number</span> holds data of more than 200 movies</li>
                            <li>It has a feature of <span>edit user profile and change avatar.</span></li>
                            <li>In this <span>dynamic routing</span> is used everywhere to fetch movies details.</li>
                            <li>It contains a <span>search bar</span> for searching movies.</li>
                        </ol>
                     </div>
                </div>
            </div>
            <div className="projects" data-aos="fade-up">
                <div className="project">
                    <div className="project-img">
                     <img src="https://firebasestorage.googleapis.com/v0/b/newcapp-38895.appspot.com/o/Screenshot%202023-06-17%20132813.png?alt=media&token=d26ec14d-a41f-4bdf-b044-7a6cbaf1eb43" alt="" />
                     </div>
                     <div className="project-details">
                        <li><span style={{color:'#1bffd3'}}>Name</span> - <span>Social-Media-App (tK4SoCiAl)</span></li>
                        <li><span style={{color:'#1bffd3'}}>Link</span> - <span><a href="https://tk4social.vercel.app" target="_blank">Live Preview</a></span></li>  
                        <h4 style={{color:'#1bffd3'}}>Technologies -</h4>
                        <ol>
                            <li>Nextjs</li>
                            <li>Firebase</li>                            
                            <li>Pexels Api</li>
                            <li>SCSS</li>
                            <li>Formik</li>
                        </ol>                   
                        <h4 style={{color:'#1bffd3'}}>Features -</h4>                                                                 
                        <ol>
                            <li>.It is a full stack responsive project able to perform <span>authentication</span> and it contain more than <span>40,000</span> of images and photos</li>
                            <li>It has a feature of <span>infinite scrolling, change themes, fontsizes, background image, change nickname</span> and <span>change profile picture.</span></li>
                            <li>It has a feature of <span>post pictures and videos</span> and also post <span>reply feature </span>and also <span>reply to the replies.</span></li>
                            <li>It has a <span>group chat</span> functionality with all the users and <span>dynamic routing</span> in messages.</li>
                        </ol>
                     </div>
                </div>
            </div>
        </div>
    )
}