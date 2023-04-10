const key = "zHIk2GFxOBUxwaLQQgMTtojJ7JQb1bel";

//getting weather data
const getWeather = async(id) =>{
    const url = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(url + query);
    const data = await response.json();
    return data;
}

//Getting city
const getCity = async(city) =>{
    const url = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(url + query);
    const data = await response.json();
    return data[0];
}