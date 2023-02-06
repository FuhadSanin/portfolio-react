import React from 'react'
import './skills.css'

export default function skills() {
  return (
    <div id='skills'>
        <h1>Skills( )</h1>
        <div className="content-row">
            <div className="content">
                <h4 className='text-primary'>Profitient</h4>
                <ul>
                    <li>C Programming</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>      
            </div>
            <div className="content">
                <h4 className='text-primary'>Frontend</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
                
            </div>
            <div className="content">
            <h4 className='text-primary'>Backend</h4>
                <ul>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>

    </div>
  )
}
