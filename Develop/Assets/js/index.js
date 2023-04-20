let APIkey = '6a603a1b7695d9e567a903c3edc9723d';
let otherAPI = '408195a1df5c96395e90601ba41a5167';
let city;
let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+otherAPI;
let btnEl = document.getElementById('btn')
let inputEl = document.querySelector('input')



$('#t').append(dayjs().format(' M/D/YYYY'))
$('#t1').text(dayjs().add(1, 'day').format('M/D/YYYY'))
$('#t2').text(dayjs().add(2, 'day').format('M/D/YYYY'))
$('#t3').text(dayjs().add(3, 'day').format('M/D/YYYY'))
$('#t4').text(dayjs().add(4, 'day').format('M/D/YYYY'))
$('#t5').text(dayjs().add(5, 'day').format('M/D/YYYY'))

var responseText = document.getElementById('response-text');

function today(url) {
  fetch(url)
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                $('#temp').text('Temperatura: '+data.main.temp+' °C')
                $('#wind').text('Wind: '+data.wind.speed+' MPH')
                $('#hum').text('Humidity: '+data.main.humidity+' %')
            });
        }
    });
}

function forecast(urlForecast){
    fetch(urlForecast)
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                console.log(data)
            });
        }
    });
}


btnEl.addEventListener("click", function(){

    if(inputEl.value){
        city = inputEl.value
        let city2= city.charAt(0).toUpperCase() + city.slice(1);
        $('#t').text(city2+dayjs().format(' M/D/YYYY'))
        inputEl.value=''
        url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey+'&units=metric';
        urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+otherAPI;
        today(url);
        console.log(urlForecast)
        forecast(urlForecast);
    }


})
