import React from "react";
import { navItems } from "@/data";
import { useEffect, useState } from "react";
export const Navbar = () => {
    const [value, setValue] = useState(0);
    const [isMenu, setIsMenu] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let header = document.querySelector('.navbar');
            header.classList.toggle('sticky', window.scrollY > 500)
        })
    }, [])
    return (
        <>
            <div className="navbar">
                <span>tushar</span>                
                {
                    isMenu ?
                        <img src="assets/cross.svg" alt="" style={{ display: 'none' }} onClick={()=>setIsMenu(false)}/>
                        :
                        <img src="assets/hamburger.svg" alt="" style={{ display: 'none' }} onClick={()=>setIsMenu(true)}/>
                }
                <div className ="menu">
                    {
                        navItems &&
                        navItems.map((data, ind) => {                            
                            return (
                                <React.Fragment key={ind+1}>
                                    <span
                                        className={value === ind ? "navitemsactive" : undefined} key={ind}>
                                        <a href={data.page}

                                            onClick={() => setValue(ind)}>
                                            {data.name}
                                        </a>
                                    </span>
                                    </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className = { isMenu ? "mobomenu navleft" : "mobomenu navright"}>
                    {
                        navItems &&
                        navItems.map((data, ind) => {                            
                            return (
                                <>
                                    <span
                                        className={value === ind ? "navitemsactive" : undefined} key={ind}>
                                        <a href={data.page}

                                            onClick={() => setValue(ind)}>
                                            {data.name}
                                        </a>
                                    </span>
                                    </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}