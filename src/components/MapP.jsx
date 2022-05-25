import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
// import { agregarGlobal } from '../redux/actions/actionWheater';
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoianVsaWFuZXN0IiwiYSI6ImNsM2x0NWFhODBsamwzYm8zNXY0aDgwaXAifQ.SWXtPcDysGaKA66QtfQJvw";
  
const MapP = () => {
  
// eslint-disable-next-line
  const cityStore = useSelector(store => store.wheaterStore)
  // eslint-disable-next-line
    const [longit, setLongit] = useState(-74.0817);
  // const prueba = () =>{
  //   try{
  //     if(cityStore.city.hasOwnProperty("coord") && cityStore.city.coord){
  //       console.log("entramos")
  //       return setLongit(cityStore.city.coord.lon)
  //     }console.log(cityStore.city.coord.lon)
  //   }catch(err){
  //     console.log("no se pudo")
  //     return -74.0817
  //   }
  // }
  // eslint-disable-next-line
const [latit, setLatit] = useState(4.6097);

  // const prueba2 = () =>{
  //   try{
  //     if(cityStore.city.hasOwnProperty("coord") && cityStore.city.coord){
        
  //       console.log("entramos")
  //       return setLatit(cityStore.city.coord.lat)
  //     }console.log(cityStore.city.coord.lat)
  //     }catch(err){
  //     console.log("no se pudo")
  //     return 4.6097
  //   }
  // }

// useEffect(() => {
//   if(cityStore.city.hasOwnProperty("coord") && cityStore.city.coord){
//     setLongit(cityStore.city.coord.lon)
//     setLatit(cityStore.city.coord.lat)
//   }
// }, [cityStore.city.coord])

  // const longitud = cityStore ? cityStore.city.coord.lon : -74.0817;
  // const latitud = cityStore ? cityStore.city.coord.lat : 4.6097;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longit);
  const [lat, setLat] = useState(latit);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; 
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <h1>MapP</h1>

      <div>
        <div className="sidebarMap">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
};
export default MapP;
