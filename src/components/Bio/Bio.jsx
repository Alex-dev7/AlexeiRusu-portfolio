import './bio.scss'
import svg from './nnneon.svg'
import UFO from '../../assets/UFO.svg'
import pdf from "../../assets/AlexeiRusu_Resume.pdf"
import certificate from "../../assets/Certificate-of-Completion.pdf"
import {DiNodejs, DiJavascript1, DiReact, DiPython, DiPostgresql, DiHtml5, DiGithubBadge, DiDjango} from 'react-icons/di';
import {SiTypescript, SiMongodb, SiTailwindcss, SiCsswizardry, SiBootstrap, SiPrisma, SiFigma} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb'; 
import { useState } from 'react';
import avatar from '../../assets/av.png'
import dialog from '../../assets/dialog.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Bio(props){
    const [toggle, setToggle] = useState(false)

    function handleClick(){
        setToggle(!toggle)
    }

    return (
    <>  
    <div className='avatar-container'>
        <img className='avatar'  src={avatar} alt='avatar' width={400}/>
         {/* <img className='dialog'  src={dialog} alt='dialog' width={200}/> */}
         <h4 className='showcase'>This portfolio showcases a range of individual and group projects that demonstrate my  <span> technical skills and creative vision.</span> </h4>
    </div>
    
   
    <section id="about" className="about-container">
        

        
        <div  className="title-wrapper">
            <p>about/</p>
        </div>
        <div className="bio-wrapper">
            <div className="text-wrapper">

                <p className={toggle ? "falseStyle" : "trueStyle"}>
                    <p className='introduction'>introduction</p>
                    <hr/>
                    Hello, I'm Alexei, a Full-Stack Software Engineer specializing in JavaScript technologies, particularly the MERN stack. My journey in software development has equipped me with a strong foundation in full-stack development and a passion for crafting effortless user experiences.

                    {/* /// old version 
                    My name is Alexei, and I am a <span id="accent" style={{}}>FULL-STACK SOFTWARE ENGINEER.</span> 
                Through my experience as a software engineer, I have developed a strong foundation in full-stack web development with JavaScript technologies, including the MERN stack. I have also learned how to apply product development fundamentals, object-oriented programming, data modeling, and team collaboration strategies to create complete web applications with API systems.  */}
                <br/><br/>
                    <p className='background' >background</p>
                    <hr/>
                    Beyond the world of code, my background in choreography adds a unique dimension to my problem-solving and design process. As a professional choreographer and dancer, I've cultivated communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams.
                {/* My background in choreography has given me a unique perspective on problem-solving and design. I have a passion for integrating technical and artistic elements to create intuitive and visually engaging user experiences that inspire and connect with users. As a professional choreographer and dancer, I have also honed my communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams. I am always eager to learn and grow in the exciting field of development. */}
                <br/><br/>
                <p className='hobbies' >hobbies</p>
                <hr/><br/>
                <span style={{fontSize: '50px'}}>&#127928;</span><br/>
                Away from the screen, I find joy in a variety of pursuits. I have a deep appreciation for music and often indulge my passion by playing musical instruments. Additionally, you'll find me embracing an active lifestyle through regular workouts, a perfect counterbalance to the sedentary nature of coding.
                <br/><br/>
                <span style={{fontSize: '50px'}}>&#9881;</span><br/>
                Intriguingly, I have a fascination with the intricate world of horology. Fixing and restoring old watches has become a rewarding hobby that not only hones my patience and attention to detail but also connects me with the craftsmanship of a bygone era.
                <br/><br/>
                <span style={{fontSize: '50px'}}>&#129302;</span><br/>
                Beyond that, I enjoy the thrill of building things with Raspberry Pi, exploring the limitless possibilities of this versatile microcomputer. This hands-on experience fuels my curiosity and allows me to apply my technical skills to creative DIY projects.
                </p> 
                <span className='clampButton' onClick={handleClick}>{toggle ? "read less" : "read more"}</span>
                <div className='cred-container'>
                    <a href="mailto:rusualexei1995@gmail.com"> my email </a>
                    <a  href={certificate} target="_blank" > certification</a>        
                    <a className="download-button" href={pdf} download>&#8681; RESUME</a>  
        
                </div>

                
                 
                          
                 
            </div>
            {/* <Robot/> */}
            
            <div className="svg-container">
            
               
             
                <p>skills & expertise/</p>
                <ul className='skills-list'>
                 
                 
                    <li><span><DiJavascript1/> </span>JavaScript</li>  
                    <li><span><DiNodejs/></span> Node.js</li>  
                    <li><span><DiPython/></span> Python</li>  
                    <li><span><DiHtml5/></span> HTML5</li>  
                    <li><span><DiReact/></span> React</li>  
                    <li><span><TbBrandNextjs/></span> Next.js</li> 
                    <li><span><DiDjango/></span> Django</li> 
                    <li><span><DiPostgresql/></span> PostgreSQL</li>  
                    <li><span><SiMongodb/></span> MongoDB</li>  
                    <li><span><SiTypescript/></span> TypeScript</li>  
                    <li><span><SiPrisma/></span> Prisma</li>  
                    <li><span><SiCsswizardry/></span> CSS</li>
                    <li><span><SiTailwindcss/></span> Tailwind</li>
                    <li><span><SiBootstrap/></span> Bootstrap</li>
                    <li><span><SiFigma/></span> Figma</li>
                    <li><span><DiGithubBadge/></span> Git&GitHub</li>

                </ul>             
            </div>
          
        </div>

        
    </section>
    </>  
    )
}

export default Bio

