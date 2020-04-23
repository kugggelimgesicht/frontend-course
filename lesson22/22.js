const speed = document.getElementById('speed');
const time = document.getElementById('time');

class App {
    constructor(elem) {
        this.elem = elem;
        this.map = null;
        this.points = [];
    }

    async start() {
        const data = (await axios.get('22.json')).data;
        this.points = data;
        ymaps.ready(() => this.initMap());

    }
    initMap() {
        this.map = new ymaps.Map("map", {

            center: [54.1, 26.5],

            zoom: 10
        });

        const line = [];
        let pause = 0;
        this.points.forEach(item => {
            pause += Number(item.time);
            line.push([Number(item.long), Number(item.latt)]);
            const point = new ymaps.Placemark([Number(item.long), Number(item.latt)]);
            this.map.geoObjects.add(point);
            point.events.add('click', () => this.displayTime(item));
        });

        const multiRoute = new ymaps.multiRouter.MultiRoute({

            referencePoints: [
                line[0],
                line[1],
                line[2],
                line[3],
            ]
        }, {
            wayPointVisible: false,
            boundsAutoApply: true
        });



        multiRoute.model.events.add('requestsuccess', function () {
            var activeRoute = multiRoute.getActiveRoute();
            speed.addEventListener('input', function () {
                time.innerText = `Время прохождения: ${calculateTime(activeRoute.properties.get("distance").value, speed.value, pause)}`;
            })

        });

        this.map.geoObjects.add(multiRoute);
    }

    displayTime(item) {
        const container = this.elem.querySelector('#info');
        container.innerHTML = ` <h3>Время простоя: ${item.time}мин</h3> `;
    }
}

const app = new App(document.getElementById('app'))
app.start();

function calculateTime(distance, speed, pause) {
    let hours;
    let mins;
    const time = Math.ceil(60 * (((distance / 1000) / speed) + pause / 60));
    if (speed == 0) {
        return '';
    }
    if (time > 59) {
        hours = time / 60;
        mins = hours - Math.floor(hours);
        return `${Math.floor(hours)}ч ${Math.ceil(mins)}мин`
    }
    else return time + 'мин';

}