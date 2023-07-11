async function longitLatit() {
  let data = {}; // declare data outside try-catch, if data declared inside try-catch, it cant be accessed outside try-catch
  try {
    const reponse = await fetch("https://geocode.maps.co/search?q=Singapore");
    data = await reponse.json();
   // console.log(data); // getting bulk data, containing 10 objects in array
  } catch(error) {
    console.log(error);
  }

  let latitude = 0,
    longitude = 0;
  let place = {};
  for (i = 0; i < 1; i++) {
    //console.log(data[i]); // targeting the first object in the array
    place = data[i]; // assignr that object to place
  }
  //formatting............
  //-----------------------------------------jhv,jdmytdmytdu-------------------------//

  //console.log(typeof place.lat); // accessing the latitude in the object
  latitude = place.lat; // how to convert latitude which is in string format into numbers?
  latitude = Number(latitude); // Number (""), this converts a string of digits into a number type
  //console.log("type of latitude after numb operation is" + typeof latitude);
  
  latitude = latitude.toFixed(2);
  longitude = place.lon;
  longitude = Number(longitude);
  longitude = longitude.toFixed(2);
  //console.log(latitude, longitude);
  //--------------------------------end --------------------//
  return [latitude, longitude];
}


async function addCoordinatesToUrl() {
  let coordinates = [];
  coordinates = await longitLatit(); // using await here as we are calling a asynchronus function, without await, we get error, we get only promise, asynch returns promise, to get value use await

 
  let latitude = coordinates[0]; // the values returned must be derived in this function and then it can be used in this function
  let longitude = coordinates[1]; // without for loop, arrays can be derived directly using index, used for very small arrays

  let Url = "";
  Url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=3";
  Url =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&hourly=temperature_2m,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&forecast_days=3";
  
  let data = await fetch(Url);
  data = await data.json();
  //console.log("the data is" + JSON.stringify(data)); // this is to convert the data from objects into strings if we want to print any message in console.log along with object display
  

  // to derive the weather factors from data variable

  let sunriseDay1 = data.daily.sunrise[0];
  let sunriseDay2 = data.daily.sunrise[1];
  let sunriseDay3 = data.daily.sunrise[2];

  let sunsetDay1 = data.daily.sunset[0];
  let sunsetDay2 = data.daily.sunset[1];
  let sunsetDay3 = data.daily.sunset[2];

  console.log(
    "the sunrise on " +
      "\nday 1 = " +
      sunriseDay1 +
      "\n day 2= " +
      sunriseDay2 +
      "\n day 3= " +
      sunriseDay3
  );

  console.log(
    "the sunset on " +
      "\nday 1 = " +
      sunsetDay1 +
      "\n day 2= " +
      sunsetDay2 +
      "\n day 3= " +
      sunsetDay3
  );

  return data;
}


// function to predict the weatherof current day

async function currentDayWeather(day1) {
  let data =await addCoordinatesToUrl();
  let day = day1;
console.log("data.hourly",await data.hourly)
  //accessing the cloud rain and temp data
  let cloudCover =  data.hourly.cloudcover; // accessing cloudcover having 72 hours data
  let rainData = data.hourly.rain;
  let tempData = data.hourly.temperature_2m;
  let avgcloudCover = 0,
    avgrainData = 0,
    avgtempData = 0; 
  let start = 0,
    end = 0; // the limits declared for "for" loops on different days

//**************calculating the avergae of sunny, rain and temp and preidcting the weather by comparing these*************************8

  if (day === 1) {
    (start = 0), (end = 24);
  } else if (day === 2) {
    (start = 24), (end = 47);
  } else if (day === 2) {
    (start = 48), (end = 72);
  }

  for (i = start; i < end; i++) {
    let sum = 0;
    sum += cloudCover[i];
    avgcloudCover = sum / 24;
  }

  for (i = start; i < end; i++) {
    let sum = 0;
    sum += rainData[i];
    avgrainData = sum / 24;
  }

  for (i = start; i < end; i++) {
    let sum = 0;
    sum += tempData[i];
    avgtempData = sum / 24;
  }

//************compare the values after calculating the average in aboive for loops****************

  
if(avgrainData>avgcloudCover){
  if(avgrainData>avgtempData){
    console.log("it rains")
  }
  else{
    console.log("it doesnt rain");
  }
}

else if(avgcloudCover>avgrainData){
  if(avgcloudCover > avgtempData){
    console.log("its raining")
  }
  else{
    console.log("its not raining");
  }
}

  // try these below instaed of above
  //if rain > cloud - nested(if-else), co pare temp
    //else if cloudy > rain - nested(if-else), compare temp
     
  //**********************weather prediction calculation ends***********************
}
currentDayWeather(2);  // passing value for predicting the weather for next day 

// function displayweatherDetails(){
//    let weatherParameters = addCoordinatesToUrl()

//    = (("celcius")*(9/5)) +32;
//    console.log("the temperature in the city in Farhenite is: " )
// }
