import React from 'react'
import './scroll.css'
import {FaArrowUp} from "react-icons/fa"
function scroll() {
  return (
    <div className='scroll'>
        <a href="#banner"><button><FaArrowUp className='icons arrowup'/></button></a>

    </div>
  )
}

export default scroll