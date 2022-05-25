import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { agregarGlobal } from "../redux/actions/actionWheater";


const SubNav = () => {

  const[city, setCity]=useState({})
  const[city2, setCity2]=useState({})
  const dispatch = useDispatch();
  const [searchD, setSearchD] = useState();
  const [searchF, setSearchF] = useState();

  const handleChange = ({ target }) => {
    setSearchD(target.value)
    setSearchF(target.value)
    }
  const handleSubmit = (e)=>{
    e.preventDefault()
    getWeather()
  }
  const getWeather = async () =>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchD}&appid=f8ffc39e35ba46ed63ffe6fe808e1599&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setCity(data)
    dispatch(agregarGlobal(data))
    console.log(data.weather)


    const API_URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${searchF}&appid=f8ffc39e35ba46ed63ffe6fe808e1599`;
    const response2 = await fetch(API_URL2);
    const data2 = await response2.json();
    setCity2(data2)
    dispatch(agregarGlobal(data2))
    
  }

  return (
    <>
      
      <div className="" style={{ width: "100%", backgroundColor: "#eee" }}>
        <Container className="contSubNav">
          <div className="contSubNavGeneral">
            <form id="searchForm" className="FormSearch1" onSubmit={handleSubmit}>
              <a href="#home" className="currentLocationButton">
                <img
                  width="16"
                  height="16"
                  src="https://darksky.net/images/current-location.png"
                  alt="Current Location Button"
                  className="ButtonSubNav"
                />
              </a>

              <input type="text" className="input1" name="searchInput" onChange={handleChange} ></input>

              <button type="submit" className="searchButton" 
              //con Este vamos a generar el envio al local Storage
              // onClick={() =>dispatch(agregarGlobal(searchD))}
              >
                <img
                  width="16"
                  height="16"
                  src="https://darksky.net/images/search.png"
                  alt="Search Button"
                  className="ButtonSubNav"
                  
                />
              </button>

              <div
                id="savedLocations"
                style={{ display: "none", opacity: "1" }}
              >
                <div
                  className="autocomplete__container"
                  style={{
                    margin: "20px",
                    marginBottom: "5px",
                    display: "none",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="autocomplete__results__container"
                    id="autocomplete__results__container"
                  ></div>
                </div>
                <div className="inner">
                  <div className="location-container">
                    <a href="#home">1 City Hall, New York, NY</a>
                    <a href="#home" className="delete-location">
                      X
                    </a>
                  </div>
                </div>
              </div>
            </form>

            <div className="options">
              <select className="buttonSelect" tabIndex="-1">
                <option value="us" className="buttonSelectItems">
                  ˚F,&nbsp;mph
                </option>
                <option value="si" className="buttonSelectItems">
                  ˚C,&nbsp;m/s
                </option>
                <option value="ca" className="buttonSelectItems">
                  ˚C,&nbsp;km/h
                </option>
                <option value="uk2" className="buttonSelectItems">
                  ˚C,&nbsp;mph
                </option>
              </select>

              <select className="buttonSelect" tabIndex="-1">
                <option value="en" className="buttonSelectItems">
                  English
                </option>
                <option value="de" className="buttonSelectItems">
                  Deutsch
                </option>
                <option value="es" className="buttonSelectItems">
                  Español
                </option>
                <option value="fr" className="buttonSelectItems">
                  Français
                </option>
                <option value="it" className="buttonSelectItems">
                  Italiano
                </option>
                <option value="nl" className="buttonSelectItems">
                  Nederlands
                </option>
                <option value="tr" className="buttonSelectItems">
                  Türk
                </option>
                <option value="ar" className="buttonSelectItems">
                  عربي
                </option>
                <option value="zh" className="buttonSelectItems">
                  中文
                </option>
                <option value="zh-tw" className="buttonSelectItems">
                  繁體中文
                </option>
                <option value="ja" className="buttonSelectItems">
                  日本語
                </option>
                <option value="x-pig-latin" className="buttonSelectItems">
                  Pig Latin
                </option>
              </select>

              {/* <b className="button">▾</b> */}
            </div>
          </div>
        </Container>
      </div>


{/* ----------DetailWheater----------------- */}

      <Container
        className=""
        style={{ width: "100%", backgroundColor: "rgba(238,238,238,.35)" }}
      >
        <div className="contDetail">
          <div className="divChildClass">
            <span className="detail1">Wind: 
            {city.name && <><span className="detailUnique"> {city.wind.speed}mph</span> <span style={{ transform: "rotate("+city.wind.deg+"deg)"}}>↑</span></>} 
            </span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Humidity: 
            {city.name && <span className="detailUnique"> {city.main.humidity}%</span>}
            </span>

          </div>
          <div className="divChildClass">
            <span className="detail1">Dew Pt:
            {city.name && <span className="detailUnique"> {city.wind.gust}</span>}
            </span>

          </div>
          <div className="divChildClass">
            <span className="detail1">Visibility: 
            {city.name && <span className="detailUnique"> {city.visibility}mi</span>}
            </span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Pressure: 
            {city.name && <span className="detailUnique"> {city.main.pressure}mb</span>}
            </span>

          </div>
        </div>
      </Container>

{/* --------------------------------- */}

{/* ----------Currently----------------- */}
{/* {city ? <h1>{city.name}</h1>: ""} */}
<div className="center">
        <div className="title">
          <div className="">
            {/* <img
              width="84"
              height="84"
              src="https://darksky.net/images/weather-icons/partly-cloudy-day.png"
              alt="partly-cloudy-day Icon"
            /> */}
            {city.name && <img width="84"
              height="84" src={"https://openweathermap.org/img/wn/"+city.weather[0].icon+"@2x.png"} alt="icon" /> }
          </div>
              <div className="contTextTitle">
            <div className="titleMain">
              <h1>{city.name && <span > {Math.round(city.main.temp)}°</span>} {city.name && <span > {city.weather[0].description}</span>}</h1>
            </div>
            <div className="detailMain">
              <span>Feels Like: 
              {city.name && <span className="detailUnique"> {city.main.feels_like}°</span>}
                </span>
              <span>Low: 
              {city.name && <span className="detailUnique"> {city.main.temp_min}°</span>}
                </span>
              <span>High: 
              {city.name && <span className="detailUnique"> {city.main.temp_max}°</span>}
                </span>
            </div>
          </div>
        </div>
        <div>
        <span className="textTitleDescrip">
          Possible light rain tomorrow afternoon and&nbsp;evening.
        </span>
        </div>
      </div>

{/* --------------------------------- */}


{/* ----------WeatherWeekly----------------- */}

<span>Now:{city.name && <span > {Math.round(city.main.temp)}°</span>}</span>
<br/>
<span>6am:{city2.cod && <span > {Math.round(city2.list[0].main.temp)}°</span>}</span>


{/* --------------------------------- */}


    </>
  );
};
export default SubNav;
