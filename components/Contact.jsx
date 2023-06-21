import Image from "next/image"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Contact = () => {    
    useEffect(()=>{
        Aos.init({
            duration:1000,
            delay:300,
        });
    },[])
    return (
        <div className="contact-container" id="contact">
            <h2>Contact Me</h2>
            <p>Ready to take the next step? Reach out to me today and let's discuss how I can contribute my skills and expertise to your team. Together, we can achieve remarkable results!</p>
            <div className="contact-social">
                <div className="social-cards" data-aos="fade-down">
                    <Image style={{marginTop:'.5em'}} src={`/assets/linkedin.svg`} height={95} width={95} alt="sdsd" />
                    <span style={{marginTop:'.5em'}}><a href="https://www.linkedin.com/in/tusharkumar21">Linkedin</a></span>
                    <span>Tushar Kumar</span>
                </div>
                <div className="social-cards" data-aos="fade-up">
                    <Image src={`/assets/email.svg`} height={110} width={110} alt="sdsd" />
                    <span><a href="mailto:tusharcr4@gmail.com">Email Address</a></span>
                    <span> <a style={{ color: '#3e64ff', WebkitTextStroke: '.03px' }} href="mailto:tusharcr4@gmail.com">tusharcr4@gmail.com</a></span>
                </div>
                <div className="social-cards" data-aos="fade-down">
                    <Image src={`/assets/fb.svg`} height={110} width={110} alt="sdsd" />
                    <span><a href="https://www.facebook.com/tusharfb21">Facebook</a></span>
                    <span>Tushar kumar</span>
                </div>
                <div className="social-cards" data-aos="fade-up">
                    <Image src={`/assets/portfolio.svg`} height={110} width={110} alt="sdsd" />
                    <span><a href="https://tk4portfolio.vercel.app">Portfolio</a></span>
                    <span ><a style={{ color: '#3e64ff', WebkitTextStroke: '.2px', fontSize: '1rem' }} href="https://tk4portfolio.vercel.app">tk4portfolio.vercel.app</a></span>
                </div>
            </div>
          <div className="contact-form">
            <img src="assets/ud.png" alt="" data-aos="zoom-in"/>
            <div className="form" data-aos="zoom-in">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>    
                <input type="text" placeholder="Your Subject"/>
                <textarea placeholder="Message" cols="30" row="7"></textarea>
                <button>SEND MESSAGE</button>
            </div>
          </div>            
        </div>
    )
}