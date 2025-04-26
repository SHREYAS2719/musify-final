

// const url = 'https://spotify23.p.rapidapi.com/search/?q=ajay%20atul&type=artists&offset=0&limit=20&numberOfTopResults=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'dffd214628mshc8a9deffe8d600bp1fe22ejsn00ee0bf5242a',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };

// const fetchData = async () => {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
//     }
// };

// fetchData();





const url = 'https://spotify23.p.rapidapi.com/search/?q=ajay%20atul&type=artists&offset=0&limit=20&numberOfTopResults=10';	
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dffd214628mshc8a9deffe8d600bp1fe22ejsn00ee0bf5242a',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

const fetchData = async () => {
	try {
		const response = await fetch(url, options);
		const data = await response.json();
console.log(data.artists.items)
		// Get artist data
		const artists = data.artists.items;

		const musicList = document.getElementById("musicList");
		musicList.innerHTML = ''; // Clear previous content

		artists.forEach(artist => {
			const imgUrl = artist.data.visuals.avatarImage?.sources[0]?.url || '/Album Page/src/random-song/default.avif';
			const name = artist.data.profile.name;

			const musicItem = document.createElement("div");
			musicItem.classList.add("music-item");

			musicItem.innerHTML = ` <a href="/single music page traial/index.html">
				<img src="${imgUrl}" alt="${name}">
				<h3>${name}</h3>
				<p>${getRandomTime()}</p>	
				</a>
			`;

			musicList.appendChild(musicItem);
		});

	} catch (error) {
		console.error(error);
	}
};

fetchData();





//  gernrating random time for music 


function getRandomTime() {
    // Generate a random time between 60 seconds (1 min) and 300 seconds (5 min)
    const randomSeconds = Math.floor(Math.random() * (300 - 60 + 1)) + 60;

    // Convert to minutes and seconds
    const minutes = Math.floor(randomSeconds / 60);
    const seconds = randomSeconds % 60;

    // Format seconds to always be two digits
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
}

