
import React, { Component } from 'react';
import Celsius from './Celsius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
    };
  }

  increaseTemperature = () => {
    this.setState(prevState => ({ temperature: prevState.temperature + 1 }));
  };

  decreaseTemperature = () => {
    this.setState(prevState => ({ temperature: prevState.temperature - 1 }));
  };

  render() {
    const { temperature } = this.state;

    return (
      <div className="App"> {/* Ana div */}
        <h1>Temperature Measurement </h1>
        <Celsius temperature={temperature} />
        <Fahrenheit temperature={temperature} />
        <Kelvin temperature={temperature} /><br></br>
        <button onClick={this.increaseTemperature}>increase the temperature</button>
        <button onClick={this.decreaseTemperature}>decrease the temperature</button>
      </div>
    );
  }
}

export default App;