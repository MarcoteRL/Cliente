"use strict";

const url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1dedaa896msh46b0915fe7ee859p1ebedbjsn51283fb0d217',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

let url2 = 'https://imdb8.p.rapidapi.com/title/get-base?tconst=';

async function fetchMovies(url, options) {
    const response = await fetch(url, options);
    return await response.json();
}

fetchMovies(url, options).then(data => {
    let splitted = data[0].split("/")
    url2 += splitted[2];
    fetchMovies(url2, options).then(data => {
        console.log(data.image.url);
    })
});