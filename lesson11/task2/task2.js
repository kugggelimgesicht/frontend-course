//blinking colons
const clockDiv = document.getElementById('clock');

function getTime() {
  return new Date().toLocaleTimeString().toString();
}
function setTime() {
  const time = getTime();
  if (clockDiv.innerText.split(':').length === 1) {
    clockDiv.innerText = time;
  } else {
    clockDiv.innerText = time.split(':').join(' ');
  }
}

setInterval(setTime, 500);
setTime();




