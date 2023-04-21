let APIkey = '6a603a1b7695d9e567a903c3edc9723d';
let otherAPI = '408195a1df5c96395e90601ba41a5167';
let city;
let city2;
let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+otherAPI;
let btnEl = document.getElementById('btn')
let inputEl = document.querySelector('input')
let cities = document.getElementById('cities')
let storedCity = JSON.parse(localStorage.getItem("cities"))
let array=[];

if(storedCity!== null){
    array=storedCity;
    for(let i=0; i<storedCity.length; i++){
        cities.innerHTML+=`<button id="${storedCity[i]}">${storedCity[i]}</button>`
    }  
}
    
cities.addEventListener("click", function(event){
    if(event.target !== event.currentTarget){
        city = event.target.id; 
        url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey+'&units=metric';
        urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+otherAPI+'&units=metric';
        today(url)
        forecast(urlForecast);
    }
})

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
                city2= city.charAt(0).toUpperCase() + city.slice(1);
                $('#t').text(city2+dayjs().format(' M/D/YYYY'))
                let iconCode = data.weather[0].icon;
                let iconUrl="http://openweathermap.org/img/w/" + iconCode + ".png";        
                $('#icon').attr('src', iconUrl)
                $('#icon').attr('alt', "weather icon forecast")
                $('#temp').text('Temp: '+data.main.temp+' °C')
                $('#wind').text('Wind: '+data.wind.speed+' m/s')
                $('#hum').text('Humidity: '+data.main.humidity+' %')
                if(!array.includes(city)){
                    array.push(city)
                    localStorage.setItem("cities", JSON.stringify(array))
                    storedCity = JSON.parse(localStorage.getItem("cities"))
                    cities.innerHTML=''
                    for(let i=0; i<storedCity.length; i++){
                        cities.innerHTML+=`<button id="${storedCity[i]}">${storedCity[i]}</button>`
                    }
                }
            });
        }
    });
}

function forecast(urlForecast){
    fetch(urlForecast)
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {

                let prevHour;
                let nextHour;
                let day;
                
                let currentHour = dayjs().add(1, 'day').format('HH');
                
                for(let i=0; i<data.list.length-1;i++){

                    prevHour=data.list[i].dt_txt;
                    day = prevHour.slice(0,10);
                    nextHour=data.list[i+1].dt_txt;
                    let timeComp = (currentHour>=prevHour.slice(11,13) && currentHour<nextHour.slice(11,13))

                    if(dayjs().add(1, 'day').format('YYYY-MM-D')===day  && timeComp){
                        let forecast1 = i;
                        let iconcode = data.list[forecast1].weather[0].icon;
                        let iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
                        $('#icon1').attr('src', iconurl)
                        $('#icon1').attr('alt', "weather icon forecast")
                        $('#temp1').text('Temp: '+data.list[forecast1].main.temp+' °C')
                        $('#wind1').text('Wind: '+data.list[forecast1].wind.speed+' m/s')
                        $('#hum1').text('Humidity: '+data.list[forecast1].main.humidity+' %')
                    }
                    if(dayjs().add(2, 'day').format('YYYY-MM-D')===day  && timeComp){
                        let forecast2 = i;
                        iconcode = data.list[forecast2].weather[0].icon;
                        iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
                        $('#icon2').attr('src', iconurl)
                        $('#icon2').attr('alt', "weather icon forecast")
                        $('#temp2').text('Temp: '+data.list[forecast2].main.temp+' °C')
                        $('#wind2').text('Wind: '+data.list[forecast2].wind.speed+' m/s')
                        $('#hum2').text('Humidity: '+data.list[forecast2].main.humidity+' %')
                    }
                    if(dayjs().add(3, 'day').format('YYYY-MM-D')===day  && timeComp){ 
                        let forecast3 = i;
                        iconcode = data.list[forecast3].weather[0].icon;
                        iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
                        $('#icon3').attr('src', iconurl)
                        $('#icon3').attr('alt', "weather icon forecast")
                        $('#temp3').text('Temp: '+data.list[forecast3].main.temp+' °C')
                        $('#wind3').text('Wind: '+data.list[forecast3].wind.speed+' m/s')
                        $('#hum3').text('Humidity: '+data.list[forecast3].main.humidity+' %')
                    }
                    if(dayjs().add(4, 'day').format('YYYY-MM-D')===day  && timeComp){
                        let forecast4 = i;
                        iconcode = data.list[forecast4].weather[0].icon;
                        iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
                        $('#icon4').attr('src', iconurl)
                        $('#icon4').attr('alt', "weather icon forecast")
                        $('#temp4').text('Temp: '+data.list[forecast4].main.temp+' °C')
                        $('#wind4').text('Wind: '+data.list[forecast4].wind.speed+' m/s')
                        $('#hum4').text('Humidity: '+data.list[forecast4].main.humidity+' %')
                    }
                    if(dayjs().add(5, 'day').format('YYYY-MM-D')===day  && timeComp){
                        let forecast5 = i
                        iconcode = data.list[forecast5].weather[0].icon;
                        iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
                        $('#icon5').attr('src', iconurl)
                        $('#icon5').attr('alt', "weather icon forecast")
                        $('#temp5').text('Temp: '+data.list[forecast5].main.temp+' °C')
                        $('#wind5').text('Wind: '+data.list[forecast5].wind.speed+' m/s')
                        $('#hum5').text('Humidity: '+data.list[forecast5].main.humidity+' %')

                    }
                }
              
            });
        }
    });
}

btnEl.addEventListener("click", function(){
    if(inputEl.value){
        city = inputEl.value
        inputEl.value=''
        url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey+'&units=metric';
        urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+otherAPI+'&units=metric';
        today(url);
        forecast(urlForecast);
    }
})
