
const container = document.getElementById("container");
const xhr = new XMLHttpRequest();
xhr.open("GET", "task1.json", true);
xhr.onload = function () {
    const items = JSON.parse(xhr.responseText);
    console.log(items)
    renderItems(items);
}

xhr.send(null);

const cartBtn = document.getElementById('showCart');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
let addedItems = localStorage.added
addedItems = localStorage.added ? JSON.parse(addedItems) : [];


let cartData = Number(localStorage.data) ? localStorage.data : 0;
const list = document.getElementById('addedItems');

cartBtn.addEventListener('click', function () {

    modal.style.display = "block";
    renderAdded(addedItems)
});
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});
window.addEventListener('click', function (evt) {
    if (evt.target == modal) {
        modal.style.display = "none";
    }
})


const cart = document.getElementById('cart');
cart.innerText = cartData;
function renderItems(items) {
    items.forEach((item, i) => {
        container.insertAdjacentHTML('beforeend', `<div class = "goods">
                                                    <h1>${item.name}</h1>
                                                    <img src=${item.image}></img>
                                                    <p>${item.description}</p>
                                                    <p class='stock'>${item.amount} in stock</p>
                                                    <button class = 'add' data-cart = '' data-index = ${i}>ADD TO CART</button>
                                                </div>`)
    });



    container.addEventListener('click', function (evt) {
        if (evt.target.hasAttribute('data-cart')) {
            const index = Number(evt.target.getAttribute("data-index"));
            console.log(items[index]);
            addedItems.push(items[index]);
            console.log(addedItems)
            localStorage.added = JSON.stringify(addedItems);

            cartData++;
            localStorage.data = cartData;
            cart.innerText = cartData;

        }
    })
}


function renderAdded(items) {
    list.innerHTML = ''
    items.forEach(item => {
        list.insertAdjacentHTML('beforeend', ` <li><h1>${item.name}</h1>
        <img src=${item.image}></img></li>`)
    })
}
