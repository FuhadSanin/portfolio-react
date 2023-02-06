import React from 'react'
import './portfolio.css'
import Card from './Cards/card'
import card1 from '../../image/card1.webp'
import card2 from '../../image/card2.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Portfolio=()=> {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div id="portfolio" >
      <div class="title" data-aos="fade-up">
        <h1>Portfolio( )</h1>
      </div>
      <div class="cards">
        <div className='card-row'  data-aos="fade-up">
          <Card title="movieNews" img={card1}/>
          <Card title="CEC" img={card2}/>
        </div>
        <div className='card-row'  data-aos="fade-up">
          <Card title="movieNews" img={card1}/>
          <Card title="CEC"/>
        </div>
        <div className='show'>
          <div className='btn'><button>Show more</button></div>
        </div>

      </div>










    </div>
  )
}

export default Portfolio