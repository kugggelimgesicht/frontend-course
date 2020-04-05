const xhr = new XMLHttpRequest();
const ul = document.getElementById('ul');
xhr.open('GET', 'retail.json', true);
xhr.onload = function () {

    const retailChains = JSON.parse(xhr.responseText);
    retailChains.forEach(retailChain => {
        const li = document.createElement('li');
        li.insertAdjacentHTML('beforeend', `<h3>${retailChain.name}</h3>`);
        ul.appendChild(li);

        const innerList = document.createElement('ol');
        li.addEventListener('click', function () {

            innerList.innerHTML = '';
            const xhr2 = new XMLHttpRequest();
            xhr2.open('GET', `${retailChain.stores}`, true);
            xhr2.onload = function () {

                const stores = JSON.parse(xhr2.responseText);
                const totalStores = stores.length;
                let totalSquare = 0;
                let totalCustomers = 0;
                stores.forEach(store => {
                    totalSquare += store.square;
                    totalCustomers += store.buyers;
                    innerList.insertAdjacentHTML('beforeend', `<li><p>${store.address}</p></li>`);


                })

                li.appendChild(innerList);
                innerList.insertAdjacentHTML('beforeend', `<p>number of stores: ${totalStores}; total square: ${totalSquare}; average square: ${(totalSquare / totalStores).toFixed(2)}; total costumers: ${totalCustomers}`);
            }

            xhr2.send(null);
        })

    });
}
xhr.send(null);