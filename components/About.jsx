import Image from "next/image";
import { skills } from "@/data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const About = () => {
    useEffect(()=>{
        Aos.init({
            duration:1000
        });
    },[])
    return (
        <div className="about-me" id="about">
            <h2 className="title">ABOUT ME</h2>
            <div className="about-me-content">
                <div className="about-me-skills" data-aos="zoom-in">
                    <h2>Skills</h2>
                    {
                        skills.map((val, ind) => {
                            return (
                                <div className="my-skills" key={ind}>
                                    <span style={{ color: `${val.bg}` }}>{val.name}</span>
                                    <div>
                                        <div style={{
                                            width: `${val.percentage}%`,
                                            background: `${val.bg}`
                                        }}>
                                        </div>
                                        <span
                                            style={{ color: `${val.bg}` }}>
                                            {`${val.percentage}%`}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="about-me-info" data-aos="zoom-in">
                    <h2>Info</h2>
                    <h1>Creative Independent Web Developer based in India</h1>
                    <p>
                        <Image
                            src={`/assets/point.svg`}
                            height={12}
                            width={12}
                            alt="point" />Welcome to my portfolio! I'm <span
                                style={{
                                    fontWeight: '500',
                                    fontSize: '1.1rem',
                                    color: '#2ea8ff',
                                    letterSpacing:'1px'                            
                                }}>Tushar Kumar [BCA] , Graduated</span>, a passionate and motivated aspiring <span
                                    style={{
                                        fontWeight: '500',
                                        fontSize: '1.1rem',
                                        color: '#2ea8ff'
                                    }}>frontend web developer</span>. With a strong foundation in web development and a keen eye for design, I am dedicated to creating engaging and user-friendly websites that leave a lasting impression.
                    </p>
                    <p>
                        <Image
                            src={`/assets/point.svg`}
                            height={12}
                            width={12}
                            alt="point" />As a fresher in the industry, I am excited to embark on my journey and contribute my skills to the ever-evolving field of frontend development. I have a solid understanding of <span
                                style={{
                                    fontWeight: '500',
                                    fontSize: '1.1rem',
                                    color: '#2ea8ff'
                                }}>HTML, CSS, JavaScript and ReactJS</span>, and I continuously enhance my knowledge by staying updated with the latest trends and best practices in web development.
                    </p>
                    <p>
                        <Image
                            src={`/assets/point.svg`}
                            height={12}
                            width={12}
                            alt="point" />Through this portfolio, I aim to showcase my projects and demonstrate my abilities as a frontend web developer. Feel free to explore my work and see firsthand how I leverage my coding skills to transform ideas into reality.
                    </p>
                </div>
            </div>
        </div>
    )
}