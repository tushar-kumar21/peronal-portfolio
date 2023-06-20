import Image from "next/image"
import { projectsData } from "@/data"
import { useState } from "react"
export const Projects = () => {
    const [isActive, setIsActive] = useState(true);
    return (
        <div className="projects-container" id="portfolio">
            <h2>Projects</h2>
            <div className="projects-nav">
                <span onClick={() => setIsActive(true)} className={isActive ? "active" : undefined}>All</span>
                <span onClick={() => setIsActive(false)} className={!isActive ? "active" : undefined}>Favourites</span>
            </div>
            <div className="projects">
                {
                    projectsData &&
                    projectsData.map((data, ind) => {
                        return (
                            isActive ? (
                                <div className="project" key={ind}>
                                    <img src={data.img} alt="" />
                                    <div className="projects-details">
                                        <span>{data.name}</span>
                                        <span><a href={data.link} target="_blank">Live Preview</a></span>
                                    </div>
                                </div>
                            ) : ( data.category === 'favourite' &&
                                    <div className="project">
                                        <img src={data.img} alt="" />
                                        <div className="projects-details">
                                            <span>{data.name}</span>
                                            <span><a href={data.link} target="_blank">Live Preview</a></span>
                                        </div>
                                    </div>)
                        )
                    })
                }
            </div>
        </div>
    )
}