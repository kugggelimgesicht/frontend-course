const tbody = document.getElementById('tbody')
function onDataLoaded(text) {
  console.log(text);
  const lines = text.split('\n');
  const names = lines.shift().split(', ');

  const items = lines.map(line => {
    const splitted = line.split(', ')
    const obj = splitted.reduce((result, value, index) => ({
      ...result,
      [names[index]]: value
    }), {});
    return obj;
  });
  console.log(items);

  const table = document.getElementById('coworkers');
  table.insertAdjacentHTML('beforeend', `<thead>
    <tr>
      <th id="name">Name</th>
      <th id="age">Age</th>
      <th id="position">Position</th>
      <th id="salary">Salary</th>
      <th id="boss">Boss</th>
    </tr>
  </thead>`);

  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const position = document.getElementById('position');
  const salary = document.getElementById('salary');
  const boss = document.getElementById('boss');

  let clickNum = 0;

  function renderSorted(arr, key) {
    if (clickNum % 2 === 0) {
      arr.sort(sortByParam(key, order = 'asc'));
      render(arr);
    }
    else {
      arr.sort(sortByParam(key, order = 'desc'));
      render(arr);
    }
    clickNum++;
  }

  name.addEventListener('click', function () { renderSorted(items, 'name') })
  age.addEventListener('click', function () { renderSorted(items, 'age') })
  salary.addEventListener('click', function () { renderSorted(items, 'salary') })
  position.addEventListener('click', function () { renderSorted(items, 'position') })
  boss.addEventListener('click', function () { renderSorted(items, 'boss') })


  function render(items) {
    tbody.innerHTML = ''; items.forEach(item => {

      tbody.insertAdjacentHTML('beforeend', `<tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.position}</td>
            <td>${item.salary}</td>
            <td>${item.boss}</td>
        </tr>`)
    })
  }
  render(items);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'task2.csv', true);
xhr.onload = function () {
  onDataLoaded(xhr.responseText);
}
xhr.send(null);


function sortByParam(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {

      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}