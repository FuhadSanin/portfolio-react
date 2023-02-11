import React ,{useEffect}from 'react'
import './skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Skills() {
 useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div id='skills'>
        <h1 data-aos="fade-up">Skills( )</h1>
        <div className="content-row">
            <div className="content" data-aos="fade-up">
                <h4 className='text-primary'>Profitient</h4>
                <ul>
                    <li>C Programming</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>      
            </div>
            <div className="content" data-aos="fade-up">
                <h4 className='text-primary'>Frontend</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
                
            </div>
            <div className="content" data-aos="fade-up">
            <h4 className='text-primary'>Backend</h4>
                <ul>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>

    </div>
  )
}
