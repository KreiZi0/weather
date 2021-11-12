document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch(city) {
	var key = "69b59f16412e7194b1ed129a5a27c525";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp){
		return resp.json()
	})
	
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {

	});
}

function cityWeather(e) {
	weatherDataFetch('Tallinn');
}