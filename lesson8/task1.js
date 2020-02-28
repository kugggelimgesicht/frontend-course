const getSum = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const getRandom = (min, max) => Math.random() * (max - min) + min;

const getDistance = (pointA, pointB) => Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2);
const a = {
  x: 5,
  y: -9
}

const b = {
  x: 2,
  y: -8
}

const getColor = function () {
  let rgb = {
    R: Math.round(Math.random() * 225),
    G: Math.round(Math.random() * 225),
    B: Math.round(Math.random() * 225)
  }

  return rgb;
}

const isSimple = function (count) {
  let dividers = 0;
  for (let i = 2; i <= count / 2; i++) {
    if (count % i == 0)
      dividers++
  }
  return dividers > 0 ? "число составное" : "число простое";
}

