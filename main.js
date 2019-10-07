var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

//Code Dealing With The API Data Goes Here
//console.log(apiResult.name);
// console.log(apiResult.weather[0].description);

var cityName = document.createTextNode(apiResult.name);
var weatherDescription = document.createTextNode(apiResult.weather[0].description);

var name = document.querySelector('#city-name span.placeholder1');
var weather = document.querySelector('#weather-report span.placeholder2');

//console.log(name);













}
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33486,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
