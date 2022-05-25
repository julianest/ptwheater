import axios from 'axios';



// const APIkey = "f8ffc39e35ba46ed63ffe6fe808e1599";

export const getData = async () => {
  
  const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f8ffc39e35ba46ed63ffe6fe808e1599");
    
    return response  
}
