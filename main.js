import key from './apikey.js';

let input = document.querySelector('.search__box');
let timeout = null;

input.addEventListener('keyup', event => {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		searchTerm(input.value);
	}, 500);
});

const searchTerm = async term => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}&limit=25&offset=0&rating=G&lang=en`;
	const response = await fetch(url, { method: 'GET' });
	const data = await response.json();
	renderData(data);
};

const renderData = data => {
	console.log(data);
};
