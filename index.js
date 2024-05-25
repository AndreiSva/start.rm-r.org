function loadSearchListener() {
	const searchbar_element = document.getElementById("searchbar");
	searchbar.addEventListener("keyup", (e) => {
		if (e.key == "Enter") {
			const query = searchbar_element.value;
			window.location.href = `https://google.com/search?q=${query}`;
		}
	});
}

function setQuote() {
	const quotes = [
		"the world is at your fingertips",
		"always remember your purpose",
		"become null and one",
		"rm-r loves you",
		"the world is love",
		"we can achieve things",
		"remember who you want to become",
		"don\'t forget your past",
		"build the future",
		"we can have control",
		"everything led up to this moment",
		"always remember your passion",
	];

	const quote_index = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quote_index];
	let quote_element = document.getElementById("logo-subtitle");
	quote_element.innerHTML = "<q>" + quote;
}

document.addEventListener("DOMContentLoaded", () => {
	loadSearchListener();
	setQuote();
})
