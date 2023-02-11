import React from 'react'
import './card.css'

const card =(props)=> {
  return (
    <div id='card'>
      <div className="img">
        <img src={props.img}/>
      </div>
      <div className="details">
        <h3 className='text-primary'>{props.title}</h3>
        <p>re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
        <h6>Stack</h6>
        <div className="btn">
          <button>HTML</button>
          <button>CSS</button>
          <button>JAVASCRIPT</button>
        </div>
        <div className="link">
          <a href="https://grand-lily-9ecdfe.netlify.app"><i class="fa-brands fa-github"></i></a>
          <a href="https://fuhadsanin.github.io/collegesitecec/"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default card