let flats = [];

for (let i = 0; i < 20; i++) { //допустим, что на этаже четыре квартиры
  let flat = {
    rooms: Math.floor(Math.random() * 3 + 1),
    tenants: Math.floor(Math.random() * 5 + 1),
    floor: Math.ceil((i + 1) / 4),
    flatNumber: i + 1,
    square: Math.floor(Math.random() * 90 + 30),

  }
  flat.payment = getPayment;
  flat.totalPayment = getTotalPayment
  console.log(flat.totalPayment())
  flats.push(flat);
}

function getPayment(month) {
  if (month <= 10 && month >= 4) {
    return this.square * this.tenants / 2;
  } else {
    return 1.8 * this.square * this.tenants / 2;
  }
}

function getTotalPayment() { //годовая коммуналка одной квартиры
  let total = 0;
  for (let month = 1; month <= 12; month++) {
    total += this.payment();
  }
  return total;
}

function getSharedPayment() {//годовая коммуналка всех квартир
  let sum = 0;
  for (let i = 0; i < this.flats.length; i++) {
    sum += this.flats[i].totalPayment();
  }
  return sum;
}

const house = {
  address: 'Kizhevatova 32A',
  year: 1982,
  floors: 5,
  flats: flats

};

const getTotalSquare = function () {
  let total = 0;
  for (let y = 0; y < flats.length; y++) {
    total += flats[y].square;
  }
  return total;
}

const getTenants = function () {
  let total = 0;
  for (let y = 0; y < flats.length; y++) {
    total += flats[y].tenants;
  } return total;
}

const density = function () {
  return this.totalSquare() / this.totalTenants();
}

house.sharedPayment = getSharedPayment;
house.totalSquare = getTotalSquare;
house.totalTenants = getTenants;
house.density = density;
console.log(house);
console.log(house.sharedPayment());
console.log(house.totalSquare());
console.log(house.density());
console.log(house.totalTenants());