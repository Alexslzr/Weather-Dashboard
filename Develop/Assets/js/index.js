


let APIkey = '6a603a1b7695d9e567a903c3edc9723d';
let city;
let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6a603a1b7695d9e567a903c3edc9723d'
let btnEl = document.getElementById('btn')
let inputEl = document.querySelector('input')




var responseText = document.getElementById('response-text');

function getApi(url) {
  fetch(url)
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                console.log(data);
            });
        }
    });
}


//getApi(url);

btnEl.addEventListener("click", function(){

    if(inputEl.value){
        city = inputEl.value
        console.log('city: '+city)
        inputEl.value=''
        url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6a603a1b7695d9e567a903c3edc9723d';
        getApi(url);
    }


})
