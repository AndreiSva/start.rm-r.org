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
	const quote_element = document.getElementById("logo-subtitle");
	quote_element.innerHTML = "<q>" + quote;
}

let api_cache = {
	"https://api64.ipify.org?format=json": null,
	"https://api.ipify.org?format=json": null,
};

function getTimeStat() {
	const current_date = new Date();
	const date_string = current_date.toDateString();
	const time_string = current_date.toLocaleTimeString();
	return time_string + ", " + date_string;
}

function getIPStat(endpoint) {
	if (api_cache[endpoint] == null) {
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				api_cache[endpoint] = data.ip;
			})
			.catch(error => {
				console.log("Error:", error);
			});
	}
	return api_cache[endpoint];
}

function getIPv6Stat() {
	return getIPStat("https://api64.ipify.org?format=json");
}

function getIPv4Stat() {
	return getIPStat("https://api.ipify.org?format=json");
}

function updateStats() {
	let stats = {
		"datetime": getTimeStat,
		"ipv6": getIPv6Stat,
		"ipv4": getIPv4Stat,
	};
	
	const stats_element = document.getElementById("info-text");
	stats_element.innerHTML = "";
	for (const [key, value] of Object.entries(stats)) {
		const stat = value();
		const stat_element = document.createTextNode(key + ": " + stat + "\n");
		stats_element.appendChild(stat_element);
	}
}

function loadStatUpdater() {
	updateStats();
	setInterval(() => {
		updateStats();
	}, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
	loadSearchListener();
	loadStatUpdater();
	setQuote();
})
