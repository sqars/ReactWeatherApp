var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=db32377aa68f5fcf18e4480ca5691eac&units=metric"

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      res =>{
        if(res.data.cod != "200" && res.data.message != "accurate"){
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      },
      res =>{
        throw new Error(res.data.message);
      }
    )
  }
}
