const points = document.getElementById('points');
const tforcast = document.getElementById('wForecast');
const d = document.getElementById('distance');
let browser = {};
let API = {};

function getCoords() {
    return new Promise(function (resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(function (pos) {
            resolve(pos.coords);
        }, function (err) {
            reject(err);
        })
    });
}



getCoords().then(function (coords) {
    renderTable(coords, 'browser');
    browser = coords;
}).catch(function (err) {
    console.error(err);
})


function getFile(path) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", path, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);

            resolve(data);

        }
        xhr.onerror = () => reject();
        xhr.send(null)
    })
}

getFile('https://freegeoip.app/json/').then(function (data) {
    API = data;
    renderTable(data, 'API');
    d.innerText = `the distance between two points is ${(hav(browser, API)/1000).toFixed(2)}km`;
})

async function getWeather() {
    const idData = await getFile('https://freegeoip.app/json/');
    console.log(idData);
    const cities = await getFile(`https://www.metaweather.com/api/location/search/?lattlong=${idData.latitude},${idData.longitude}`);
    const nearest = cities.slice(1, 6);

    for (let i = 0; i < nearest.length; i++) {

        const forecast = await getFile(`https://www.metaweather.com/api/location/${nearest[i].woeid}/`);

        renderWeather(forecast)

    }


}
getWeather()

function renderTable(obj, name) {
    points.insertAdjacentHTML('beforeend', `<tr><td>${name}</td><td>${obj.longitude}</td><td>${obj.latitude}</td></tr>`);
}

function renderWeather(city) {
    const weather = city.consolidated_weather.map(function (temp) {
        return Math.ceil(temp.the_temp);
    });
    const date = city.consolidated_weather.map(function (temp) {
        return temp.applicable_date;
    });
    const state = city.consolidated_weather.map(function(temp){
        return temp.weather_state_name;
    })
    console.log(weather)
    tforcast.insertAdjacentHTML('beforeend', `<tr>
                                            <td>${city.title}</td>
                                            <td>today</td>
                                            <td>tomorrow</td>
                                            <td>${date[2]}</td>
                                            <td>${date[3]}</td>
                                            <td>${date[4]}</td>
                                        </tr>`)
    tforcast.insertAdjacentHTML('beforeend', `<tr>
                                            <td></td>
                                            <td> ${weather[0]}&deg; C, ${state[0]}</td>
                                            <td> ${weather[1]}&deg; C, ${state[1]}</td>
                                            <td> ${weather[2]}&deg; C, ${state[2]}</td>
                                            <td> ${weather[3]}&deg; C, ${state[3]}</td>
                                            <td> ${weather[4]}&deg; C, ${state[4]}</td>
                                            </tr>`);
}

function hav(a, b) {
    return 2 * 6371 * (Math.sqrt(Math.sin(((a.latitude - b.latitude) / 2) ** 2) + Math.cos(a.latitude) * Math.cos(b.latitude) * (Math.sin((a.longitude - b.longitude) / 2) ** 2)))
}

