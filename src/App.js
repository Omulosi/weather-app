import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

const API_KEY='bdd5dff4ba17ef47ce62c637349d7532';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      data: {},
    }
  }

  componentDidMount() {
    this.getWeatherData('London');
  }

  getWeatherData = async (location) => {
    // fetch weather data
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`;
      this.setState({loading: true})
      const response = await fetch(url);
      const data = await response.json();
      let parsedData = this.parseData(data);
      this.setState({data: parsedData, loading: false, error: null})
    } catch(error) {
      console.log(error)
      this.setState({error: "Location Not Found", loading: false});
    }
    }

  parseData = (data) => {
    let main = data.weather[0].main.toLowerCase();
    let match = main.endsWith('s')? main.slice(0, -1): main;
    match = match === 'mist'? 'fog': match;
    return {
      description: data.weather[0].description,
      main: match,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      temperature: data.main.temp,
      wind: data.wind.speed,
      clouds: data.clouds.all,
      location: data.name
    };
  }

  getForecast = (location) => {
    this.getWeatherData(location);
  }


  render() {

    const { data, error, loading } = this.state;
    return (
      <div>
        <Header />
        <SearchForm getForecast={this.getForecast}/>
        <WeatherCard data={data} error={error} loading={loading}/>
      </div>
    )
  }

}


export default App;
