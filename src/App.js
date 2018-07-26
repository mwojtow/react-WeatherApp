import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "64bd459b55ce780015ef29df99092a33";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      error: undefined
    };
  }

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.city.value;
    const country = e.target.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    // const api_call = await fetch(
    //   `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric&cnt=16`
    // );

    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "fill the fields"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Weather App</h1>
        </header>
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
