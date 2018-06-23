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
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}&limit=50&offset=0&rating=G&lang=en`;
	const response = await fetch(url, { method: 'GET' });
	const data = await response.json();
	const container = document.querySelector('.gallery');
	container.innerHTML = '';
	renderData(data, container);
};

const renderData = (data, container) => {
	data.data.forEach(element => {
		const img = document.createElement('img');
		img.classList.add('gallery__item');
		img.src = element.images.original.url;
		container.appendChild(img);
	});
};
