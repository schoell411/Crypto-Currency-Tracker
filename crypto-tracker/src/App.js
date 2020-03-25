import React from "react";
import "./App.css";
import GeminiTicker from "./exchanges/GeminiTicker";

function App() {
	return (
		<div className="App">
			<h1>Crypto Tracker</h1>
			<GeminiTicker />
		</div>
	);
}

export default App;
