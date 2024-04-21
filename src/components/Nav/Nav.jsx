import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import pdf from '../../assets/AlexeiRusu_Resume.pdf'
import ContactForm from '../Contact/ContactForm'
import { useState } from 'react'


function Nav(props){
const {toggle, setToggle} = useState(false)


    return (
        <div>
            
            <div className='socials-wrapper'>
                
                <a href="https://github.com/Alex-dev7" target="_blank" >
                    <img src='github.svg' width={30} height={30}/>
                </a>
                <a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">
                     <img src='linkedin.svg' width={30} height={30}/>
                </a>
              
            </div>
            <m.nav variants={container} initial={"hidden"}
            animate="show" className='nav-container'>
                <a  href="#about" >
                    <m.div variants={item} >➀ about</m.div>    
                </a> 
                <a href="#work" >
                    <m.div variants={item} >➁ work</m.div>    
                </a> 
                <a href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing"  target="_blank" >
                    <m.div variants={item}>➂ resume</m.div>    
                </a> 
                <a  href="#contact" onClick={() => setToggle(true)}>
                    <m.div variants={item} >➃ contact </m.div>    
                </a> 
            </m.nav>
        </div>
    )
}

export default Nav