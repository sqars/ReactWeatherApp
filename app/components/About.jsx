var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Hello, my name is Maciej and welcome to my WeatherApp!</p>
        <p>You can find code on gitHub: <a href="https://github.com/sqars/ReactWeatherApp">Git Repo</a></p>

      </div>
    );
  }
});

module.exports = About;
