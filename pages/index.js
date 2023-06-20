import React from 'react'
import { Navbar } from '@/components/Navbar';
import { Main } from '@/components/Main';
import { About } from '@/components/About';
import { Projects } from '@/components/ProjectCategories/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <>
   <Navbar/>      
   <Main/>      
   <About/>     
   <Projects/> 
   <Contact/>
    </>
  )
}

export default Index;
