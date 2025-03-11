import React, { useState } from 'react';
function Weather({ weather }) {
	const [isFahrenheit, setIsFahrenheit] = useState(false);
	const temp = isFahrenheit ? weather.temp * (9 / 5) + 32 : weather.temp;

	const styles = {
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '15px',
	};

	return (
		<div style={styles}>
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
				<h3>
					{temp.toFixed(2)} {isFahrenheit ? '°F' : '°C'}
				</h3>
				<button onClick={() => setIsFahrenheit(!isFahrenheit)}>
					Change to {isFahrenheit ? 'Celcius' : 'Fahrenheit'}
				</button>
			</div>
		</div>
	);
}

export default Weather;
