
import './App.css';
import Home from './Sections/Home/home';
import { useState,useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
function App() {
  const[loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },0)
  },[])
  return (
    <div className="App">

      {
        loading ?
        <div className='loader'>
          <PropagateLoader color={"black"} loading={loading} size={30}/>
        </div>
        :

        (<Home/>)
      }
    </div>

  );
}

export default App;
