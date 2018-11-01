document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    // for (let pagenumber = 1; pagenumber <= 37; pagenumber++) {
    //     searchSpaceShip(`https://swapi.co/api/starships/?page=${pagenumber}`);
    // }
    searchPokemon('https://pokeapi.co/api/v2/pokemon/1/')
}

function searchSpaceShip(url) {
    let promise = new Promise(function(resolve,reject) {
        const apiURL = url;
        const xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open('GET', apiURL, true);
        xmlHTTP.onload = function() {
            if (xmlHTTP.status === 200) {
                const result = JSON.parse(this.responseText);
                result.results.forEach(poke => addPokemon(poke));
                resolve("Success!");
            } else {
                reject(Error("Error!"));
            }
        }
        xmlHTTP.send();    
    });
    promise.then(function(message) {
        console.log(message)
    });
}

function addPokemon(data) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const image = document.createElement('td');
    // const modelData = document.createElement('td');
    // const manufacturerData = document.createElement('td');
    // const priceData = document.createElement('td');

    nameData.textContent = data.form.name;
    // modelData.textContent = spaceShip.model;
    // manufacturerData.textContent = spaceShip.manufacturer;
    // priceData.textContent = spaceShip.cost_in_credits;

    row.appendChild(nameData);
    row.appendChild(modelData);
    row.appendChild(manufacturerData);
    row.appendChild(priceData);

    document.querySelector('.tableShip tbody').appendChild(row);
}