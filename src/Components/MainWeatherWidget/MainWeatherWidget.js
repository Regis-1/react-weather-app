import FormLabel from 'react-bootstrap/FormLabel'
import Figure from 'react-bootstrap/Figure'

import { useState, useEffect } from 'react'

import DropdownSearchBar from "../DropdownSearchBar"
import './style.css'
import RainIcon from '../../WeatherIcons/wi-rain.svg'

const MainWeatherWidget = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: 0,
    relativeHumidity: 0,
    dewpoint: 0,
    weatherCode: 0,
    windspeed: 0
  })
  const [searchCities, setSearchCities] = useState([])

  const handleCitySelect = (e) => {
    const selectedCity = searchCities.filter(item => item.desc == e.target.text)[0]
    const weatherReqUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.long}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,weathercode,windspeed_10m`
    const currentHour = new Date().getHours().toString()

    fetch(weatherReqUrl)
      .then(response => response.json())
      .then(result => setWeatherInfo({
        temperature: result.hourly.temperature_2m[currentHour - 1],
        relativeHumidity: result.hourly.relativehumidity_2m[currentHour - 1],
        dewpoint: result.hourly.dewpoint_2m[currentHour - 1],
        weatherCode: result.hourly.weathercode[currentHour - 1],
        windspeed: result.hourly.windspeed_10m[currentHour - 1]
      }))
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    fetch('http://localhost:3838/cities')
      .then(response => response.json())
      .then(result => setSearchCities(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="main-weather-widget">
      <div className='city-select'>
        <FormLabel htmlFor='DropdownSearchBar'><h2>City:</h2></FormLabel>
        <DropdownSearchBar
          id = 'DropdownSearchBar'
          items={searchCities}
          onItemSelect={handleCitySelect}
          variant='dark'
        />
      </div>
      <div className='numerical-weather-info'>
        <span id='TemperatureInfo'>{weatherInfo.temperature}°C</span>
        <div>
          <h3>Humidity: {weatherInfo.relativeHumidity}%</h3>
          <h3>Dewpoint: {weatherInfo.dewpoint}°C</h3>
          <h3>Windspeed: {weatherInfo.windspeed} km/h</h3>
        </div>
      </div>
      <div className='iconical-weather-info'>
        <Figure>
          <Figure.Image
            src={RainIcon}
            width={200}
            height={200}
          />
          <Figure.Caption>
            {weatherInfo.weatherCode}
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  )
}

export default MainWeatherWidget