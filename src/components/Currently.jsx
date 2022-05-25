import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux"

const Currently = () => {
  

  const cityStore = useSelector(store => store.wheaterStore)
  
  const[city, setCity]=useState({})  

  const cargueEstadoLocal = ()=>{
    setCity(cityStore)
  }
useEffect(()=>{
  if(cityStore !== null){
    cargueEstadoLocal()
  }else{console.log("no se ha cargado nada")}
  
},[cityStore])


  return (
    <>
    {city ? <h1>{city.name}</h1>: console.log("nada")}
      
      {city.name ? <h1>{city.main.temp}</h1>: console.log("nada")}
      <div className="center">
        <div className="title">
          <div className="">
            <img
              width="84"
              height="84"
              src="https://darksky.net/images/weather-icons/partly-cloudy-day.png"
              alt="partly-cloudy-day Icon"
            />
          </div>
          
            
              <div className="contTextTitle">
            <div className="titleMain">
              <h1>59° Mostly Cloudy.</h1>
            </div>
            <div className="detailMain">
              <span>Feels Like: 
                {city ? <h1 >{city.name}</h1> : ""}

                </span>
              <span>{`Low: `}</span>
              <span>{`High: `}</span>
            </div>
          </div>
          
          


        </div>
        <div>
        <span className="textTitleDescrip">
          Possible light rain tomorrow afternoon and&nbsp;evening.
        </span>
        </div>
      </div>
    </>
  );
};

export default Currently;
