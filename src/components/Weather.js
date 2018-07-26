import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="weather__container">
      {props.icon && (
        <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
      )}
      {props.temperature && <p>{props.temperature}</p>}
      {props.city &&
        props.country && (
          <p>
            {props.city}, {props.country}
          </p>
        )}
      {props.humidity && <p>{props.humidity}</p>}
      {props.description && <p>{props.description}</p>}
    </div>
  );
};
export default Weather;
