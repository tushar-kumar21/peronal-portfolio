import { useRef } from "react";

export const Main = () => {
    const arr = ["Frontend Web Developer.", "Web Designer.", "Full Stack Developer."];
    const sectionRef = useRef(null);
    
    const createBubble=()=>{
        if(sectionRef.current){
        const createElement = document.createElement('div');
        let size = Math.random()*5;
        createElement.style.width = 8 + size + 'px';
        createElement.style.height = 8 + size + 'px';
        createElement.style.left = Math.random()*innerWidth + 'px';
        sectionRef.current.appendChild(createElement);
        setTimeout(()=>{
            createElement.remove()
        },5000);    
    }
    }
    setInterval(createBubble,30)

    let c = 0;
    setInterval(()=>{        
        c++;
        document.querySelector('.profession span').textContent = arr[c];
        if(c === 2){
            c = 0;
        }
    },3000)

    return (
        <div className="main" id="main">
            <div className="main-info">
                <h1 className="heading">TUSHAR</h1>
                <div className="profession">
                    <span>Frontend Developer.</span>
                </div>
                <h3>from New Delhi, Delhi, India</h3>
                <div className="see-portfolio">
                    <span><a href="#portfolio">SEE PORTFOLIO</a></span>
                </div>
            </div>
            <div className="bubble-container" ref={sectionRef}>                              
            </div>
            <img src="assets/developer.png" alt="" />                    

        </div>
    )
}