var lat ;
var long;
const firstCont = document.getElementById("firstContainer");
const fetchDataBtn = document.getElementById("fetchBtn");
const dataCont = document.getElementById("secondPage")

fetchDataBtn.addEventListener("click",giveData)
function giveData(){

    firstCont.style.display="none";
    dataCont.style.display="inline-block";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } 
    else {
    alert("Your location isn't available to us and we cannot show weather data")
    }

      function showPosition(position) {
        lat=position.coords.latitude;
        long=position.coords.longitude;
        const apiKey = "854bec177e36c2552578c7b039a2b5eb"; //add your api 
        // console.log(lat,long);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}0`
        // arrangeApi(lat,long);
        // console.log(url);
        retData(url)
   
      }

      
}


async function retData(fullAPi){
    const apiUrlData = await fetch(fullAPi);
    const DataApi = await apiUrlData.json();
    //console.log(DataApi);
   
   
    showData(DataApi);
   }

function showData(data){
    // console.log(data.name);

        let arr = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];

        var WindDir = data.wind.deg;
        // console.log(data.wind.deg);

        CompassDir = Math.round((WindDir % 360)/ 22.5,0)+1;
        // console.log(arr[CompassDir-1]);
        // 
        var location =data.name;
        var timeZone = data.timezone;
        var WindSpeed = data.wind.speed;
        var pressure = data.main.pressure;
        var humidity = data.main.humidity;
        var windDirection = arr[CompassDir-1];
        var uV ;
        var feelLike = data.main.feels_like;

        // console.log(location);
        // console.log(lat,long);
        // console.log(timeZone);
        // console.log(WindSpeed);
        // console.log(pressure);
        // console.log(humidity);
        // console.log(windDirection);
        // console.log(feelLike);
        document.getElementById("location").innerText= `Location : ${location}`;
        document.getElementById("latLong").innerText= `Lat: ${lat}       \xa0\xa0\xa0\xa0\xa0\xa0\xa0      Long: ${long}`;
        // document.getElementById("long").innerText= `Long: ${long}`;
        document.getElementById("timeZone").innerText= `Time Zone : ${timeZone}`;
        document.getElementById("windSpeed").innerText= `Wind Speed: ${WindSpeed}`;
        document.getElementById("pressure").innerText= `Pressure: ${pressure}`;
        document.getElementById("humidity").innerText= `Humidity: ${humidity}`;
        document.getElementById("windDirection").innerText= `Wind Direction: ${windDirection}`;
        document.getElementById("feelLike").innerText= `Feel Like: ${feelLike}`;
        document.getElementById("Lat").innerText= `Lat: ${lat}  `;
        document.getElementById("Long").innerText= `Long: ${long}`
}