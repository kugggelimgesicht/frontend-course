const names = ['Джон', 'Эндрю', 'Стэн', 'Норман', 'Бенедикт'];
const items = ['отвертка', 'саморезы', 'перфоратор', 'дюбеля', 'фрезы'];
const cities = ['Лондон', 'Бристоль', 'Ньюкасл', 'Бирмингем', 'Оксфорд'];
function getRand() {
  return Math.round(Math.random() * 4);
}

setInterval(() => {
  const div = document.createElement('div');
  div.style.cssText = "position: absolute; right: 0;bottom: 0;width: 15%; height: 10%; border: 2px #6F9C00 solid; background-color:#ABF000; border-radius:10px; font-family:sans-serif; padding:25px 0 0 10px;"
  div.innerText = `${names[getRand()]} из г. ${cities[getRand()]} купил ${getRand() + 1} шт. товара ${items[getRand()]}`;
  document.body.appendChild(div)
  setInterval(() => {
    div.remove()
  }, 4000)
}, 5000)

