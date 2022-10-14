import { useState, useEffect } from 'react';

import DropdownSearchBar from "../DropdownSearchBar";

const MainWeatherWidget = () => {
  const [weatherInfo, setWeatherInfo] = useState({temp: ''})
  const [searchCities, setSearchCities] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3838/cities')
      .then(response => response.json())
      .then(result => setSearchCities(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="main-weather-widget">
      <DropdownSearchBar items={searchCities} />
      <h1></h1>
    </div>
  )
}

export default MainWeatherWidget;