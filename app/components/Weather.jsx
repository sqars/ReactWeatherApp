var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
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
          errorMessage: err.message,
          location: "",
          temp: ""
        });
      }
    );
  },
  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if(temp && location){
        return <WeatherResult location={location} temp={temp}></WeatherResult>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal errorMessage={errorMessage}></ErrorModal>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
