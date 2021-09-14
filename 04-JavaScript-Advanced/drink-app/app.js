'use-strict';

const heading = document.querySelector('h1');
const tagline = document.querySelector('h2');
const description = document.querySelector('h3');
const abv = document.querySelector('span');
const foodPairing = document.querySelector('h4');

const getRandomDrink = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then((response) => response.json())
        .then((data) => {
            data.map((items) => {
                return console.log(
                    (data = [
                        (heading.innerHTML = items.name),
                        (tagline.innerHTML = items.tagline),
                        (description.innerHTML = items.description),
                        (abv.innerHTML = `${items.abv}%`),
                        (foodPairing.innerHTML = `Pairs well with: ${items.food_pairing[0]}`),
                    ])
                );
            });
        })
        .catch((err) => console.log(err));
};

getRandomDrink();
