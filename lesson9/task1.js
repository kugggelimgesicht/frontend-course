//Написать функцию, которая принимает массив объектов и название ключа, по которому нужно его отсортировать. 
const getRandomN = () => Math.round(Math.random() * 100);
let initArr = new Array(10).fill('').map(() => ({
  x: getRandomN(),
  y: getRandomN(),
  z: getRandomN()
}));


function sortByKey(array, key) {
  let resArr = [...array]
  return resArr.sort(function(a, b) {
    const x = a[key];
    const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
console.log(initArr);
console.log(sortByKey(initArr, 'z'));
