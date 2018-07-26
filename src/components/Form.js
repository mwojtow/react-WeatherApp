import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city..." />
          <input type="text" name="country" placeholder="country..." />
          <input type="submit" value="getWeather" />
        </form>
      </div>
    );
  }
}
export default Form;
