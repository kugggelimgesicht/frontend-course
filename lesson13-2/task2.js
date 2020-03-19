const menu = document.getElementById('custom-menu')
function showCM(show = true) {
    menu.style.display = show ? 'block' : 'none';
}
window.addEventListener("contextmenu", function (evt) {
    evt.preventDefault();
    showCM();
    menu.style.top = `${evt.offsetY}px`;
    menu.style.left = `${evt.offsetX}px`


});
function hideCM() {
    showCM(false);
}
window.addEventListener('click', hideCM)

let items = document.getElementsByClassName('item');
Array.from(items).forEach((item) => {
    item.addEventListener('click', function () {


        alert(`you've chosen ${item.innerText}`)
    })
})