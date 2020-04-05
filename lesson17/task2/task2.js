
const ol = document.getElementById('ol');
const notFound = document.getElementById('not-found');
const job = document.getElementById('job');
const place = document.getElementById('location');
const search = document.getElementById('search');
search.addEventListener('click', function () {
    notFound.innerText = '';
    ol.innerText = '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${job.value}&location=${place.value}`);
    xhr.onload = function () {

        console.log(JSON.parse(xhr.responseText));
        const offers = JSON.parse(xhr.responseText);
        renderOffers(offers);

    }
    xhr.send(null)
})


function renderOffers(offers) {
    if (offers.length === 0) {
        notFound.innerText = 'Sorry, no offers found';
    }

    offers.forEach(offer => {
        const li = document.createElement('li');
        li.insertAdjacentHTML('beforeend', `<ul>
        <li><h3>Offer:</h3>${offer.title}</li>
        <li><h3>Added:</h3>${offer.created_at}</li>
        <li><h3>Company:</h3><a href=${offer.company_url}><img src='${offer.company_logo}'>${offer.company}</a></li>
        <li><h3>Location:</h3>${offer.location}</li>
        <li><h3>Type:</h3>${offer.type}</li>
        <li><h3>Description:</h3>${offer.description}</li>
        <li><a href='${offer.url}'>show at github</li>
        </ul>`)
        ol.appendChild(li)
    });
}