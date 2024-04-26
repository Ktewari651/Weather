import { GridItem } from "@chakra-ui/react";
import React from "react";
import './WeatherUpdate.css'

const WeatherUpdate = ({item}) =>{

   
    return(
        <div className="weather-container">
        <div className="weather-field">
            <div>City:</div>
            <div>{item.city}</div>
        </div>
        <div className="weather-field">
            <div>Temperature:</div>
            <div>{item.tem}</div>
        </div>
        <div className="weather-field">
            <div>Humidity:</div>
            <div>{item.humidity}</div>
        </div>
        <div className="weather-field">
            <div>Wind:</div>
            <div>{item.windSpeed}</div>
        </div>
    </div>
    
    )
}

export default WeatherUpdate