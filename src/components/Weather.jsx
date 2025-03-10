import React from 'react';

function Weather({ weather }) {
	return (
		<div>
			<h1>Weather App</h1>
			<h2>
				{weather.city}, {weather.country}
			</h2>
			<div>
				<img src={weather.icon} alt="icon-reserved" />
				<div>
					<h3>"{weather.description}"</h3>
					<ul>
						<li>
							<strong>Wind Speed:</strong> {weather.wind}m/s
						</li>
						<li>
							<strong>Clouds:</strong> {weather.clouds}%
						</li>
						<li>
							<strong>Pressure:</strong> {weather.pressure}hPa
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h3>{weather.temp}</h3>
				<button>Change to °F</button>
			</div>
		</div>
	);
}

export default Weather;
