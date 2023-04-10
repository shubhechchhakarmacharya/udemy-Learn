const input = document.querySelector("form");
const card = document.querySelector(".card");
const detail = document.querySelector(".details");
const time = document.querySelector("img.time")
const icon = document.querySelector(".icon img")
const updateUI = (data) => {
    const cityDets = data.citydetail;
    const weather = data.weatherdetail
    const html = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span> 
        </div>
    `
    detail.innerHTML = html;
    let timeSrc = null;
    if (weather[0].IsDayTime) {
        timeSrc = "icons/day.svg"
    } else{
        timeSrc = "night.svg"
    }

    time.setAttribute('src',timeSrc)

    const iconSrc = `icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
    console.log(weather[0].WeatherIcon)
}

const update = async (city) => {
    const citydetail = await getCity(city);
    const weatherdetail = await getWeather(citydetail.Key);
    return { citydetail, weatherdetail };
}

input.addEventListener('submit', async e => {
    e.preventDefault();
    const city = input.city.value.trim();
    input.reset();

    try {
        const data = await update(city);
        updateUI(data);

    } catch (err) {
        console.log(err);
    }
});