import { useState } from 'react';

import DropdownSearchBar from "../DropdownSearchBar";

const MainWeatherWidget = (props) => {
  const [weatherInfo, setWeatherInfo] = useState({temp: ''})

  return (
    <div className="main-weather-widget">
      <DropdownSearchBar items={props.items} />
      <h1></h1>
    </div>
  )
}

export default MainWeatherWidget;