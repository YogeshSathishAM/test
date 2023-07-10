async function longitLatit(){
    let data = {}; // declare data outside try-catch, if data declared inside try-catch, it cant be accessed outside try-catch
    try{
    const reponse = await fetch("https://geocode.maps.co/search?q=Singapore");
 data = await reponse.json()
console.log(data); // getting bulk data, containing 10 objects in array
    }
    catch{
        console.log(data)
    }

let latitude = 0, longitude = 0;
let place = {};
for(i=0;i<1;i++){
    console.log(data[i]) // targeting the first object in the array
    place = data[i] // assignr that object to place
}
//formatting............
//-----------------------------------------jhv,jdmytdmytdu-------------------------//

console.log(typeof place.lat); // accessing the latitude in the object 
latitude = place.lat;  // how to convert latitude which is in string format into numbers?
latitude = Number(latitude); // Number (""), this converts a string of digits into a number type
console.log("type of latitude after numb operation is" +(typeof latitude))
console.log("after placing the value first latitude is "+latitude+ "type of is" +typeof(latitude));
latitude = latitude.toFixed(2);
longitude = place.lon
longitude = Number(longitude);
longitude = longitude.toFixed(2);
console.log(latitude,longitude);
//--------------------------------end --------------------//
return[latitude,longitude];
}
console.log("after returning" +longitLatit());

async function addCoordinatesToUrl(){

    let coordinates = [];
    coordinates = await longitLatit();  // using await here as we are calling a asynchronus function, without await, we get error, we get only promise, asynch returns promise, to get value use await

    console.log("coordinates after assigning are "+coordinates);
    let latitude = coordinates[0]; // the values returned must be derived in this function and then it can be used in this function
    let longitude = coordinates[1]; // without for loop, arrays can be derived directly using index, used for very small arrays

    let Url = "";
    Url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=3";
    Url = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=3"
    console.log(Url);
    let data = await fetch(Url);
    data = await data.json();
    //console.log("the data is" + JSON.stringify(data)); // this is to convert the data from objects into strings if we want to print any message in console.log along with object display
console.log("the data of the coordibnates are:")
console.log(data);

// to derive the weather factors from data variable

let sunriseDay1 = data.daily.sunrise[0];
let sunriseDay2 = data.daily.sunrise[1];
let sunriseDay3 = data.daily.sunrise[2];

let sunsetDay1 = data.daily.sunset[0];
let sunsetDay2 = data.daily.sunset[1];
let sunsetDay3 = data.daily.sunset[2];

console.log("the sunrise on "+"\nday 1 = "+sunriseDay1+"\n day 2= "+sunriseDay2+  "\n day 3= "+sunriseDay3);

console.log("the sunset on "+"\nday 1 = "+sunsetDay1+"\n day 2= "+sunsetDay2+  "\n day 3= "+sunsetDay3);

return data;
}
addCoordinatesToUrl();

// function to predict the weatherof current day

function currentDayWeather(day){
let data = addCoordinatesToUrl();
let currentday = day;

//accessing the cloud rain and temp data 
let cloudCover = data.hourly.cloudcover; // accessing cloudcover having 72 hours data
let rainData = data.hourly.rain;
let tempData = data.hourly.temperature_2m
let avgcloudCover = 0, avgrainData = 0, avgtempData= 0;

if (currentday ===1){

for(i=0; i<24; i++){
    let sum = 0;
    sum += cloudCover[i];
    avgcloudCover = sum/24
}

for(i=0; i<24; i++){
    let sum = 0;
    sum += rainData[i];
    avgrainData = sum/24
}

for(i=0; i<24; i++){
    let sum = 0;
    sum += tempData[i];
    avgtempData = sum/24
}

}

if (currentday ===2){

    for(i=24; i<47; i++){
        let sum = 0;
        sum += cloudCover[i];
        avgcloudCover = sum/24
    }
    
    for(i=24; i<47; i++){
        let sum = 0;
        sum += rainData[i];
        avgrainData = sum/24;
    }
    
    for(i=24; i<47; i++){
        let sum = 0;
        sum += tempData[i];
        avgtempData = sum/24
    }
    
    }

    if (currentday ===3){

        for(i=48; i<72; i++){
            let sum = 0;
            sum += cloudCover[i];
            avgcloudCover = sum/24
        }
        
        for(i=48; i<72; i++){
            let sum = 0;
            sum += rainData[i];
            avgrainData = sum/24
        }
        
        for(i=48; i<72; i++){
            let sum = 0;
            sum += tempData[i];
            avgtempData = sum/24
        }
        
        }

    if(avgcloudCover>avgtempData && avgtempData >avgrainData){
        console.log("it is raining ")
    }
    else{
        console.log("its not raining");
    }

}
currentDayWeather(2);



// function displayweatherDetails(){
//    let weatherParameters = addCoordinatesToUrl()

//    = (("celcius")*(9/5)) +32;
//    console.log("the temperature in the city in Farhenite is: " )
// }


