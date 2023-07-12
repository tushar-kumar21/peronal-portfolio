import React, { useEffect } from 'react'
import { Navbar } from '@/components/Navbar';
import { Main } from '@/components/Main';
import { About } from '@/components/About';
import { Projects } from '@/components/ProjectCategories/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  useEffect(()=>{

    let cursor = document.querySelector('.cursor')
    let cursor2 = document.querySelector('.cursor2')
    
    
    document.addEventListener('mousemove',(e)=>{
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    })
  },[])

  return (
    <>
   <Navbar/>      
   <Main/>      
   <About/>     
   <Projects/> 
   <Contact/>
   <div className="cursor"></div>
   <div className="cursor2"></div>
    </>
  )
}

export default Index;
