import React, { Component } from 'react'

const Weather = props => {
    return (
      <div>Weather component
          <p>{props.temperature}</p>
          <p>{props.city}</p>
          <p>{props.country}</p>
          <p>{props.humidity}</p>
          <p>{props.description}</p>
      </div>
    );
}
export default Weather;