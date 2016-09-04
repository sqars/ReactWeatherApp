var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(
      temp => {
        self.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      err => {
        self.setState({
          isLoading: false,
          location: "",
          temp: ""
        });
        alert(err);
      }
    );
  },
  render: function(){
    var {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>;
      } else if(temp && location){
        return <WeatherResult location={location} temp={temp}></WeatherResult>;
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
