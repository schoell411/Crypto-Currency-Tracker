import React from "react";
import { connect } from "react-redux";
import { fetchBitcoinPrices } from "../actions";

const GeminiTicker = props => {
	const dailyVariation = () => {
		let x = (props.ticker.close - props.ticker.open).toFixed(2);
		return x;
	};

	return (
		<div>
			<h1>Gemini</h1>
			<button onClick={props.fetchBitcoinPrices}>Gemini Bitcoin Price</button>
			{!props.ticker && <h3>No Price Requested</h3>}
			{props.isLoading && <h3>Price Loading...</h3>}
			{props.ticker && !props.isLoading && (
				<div>
					<h3>Current Bitcoin asking price: ${props.ticker.ask}</h3>
					<p>Last bid: ${props.ticker.bid}</p>
					<p>
						Opening Price : {props.ticker.open} Closing Price :{" "}
						{props.ticker.close}
					</p>
					<p className={`${dailyVariation() < 0 ? "negative" : ""}`}>
						Daily {`${dailyVariation() < 0 ? "Decrease" : "Increase"}`}: $
						{dailyVariation()}
					</p>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		ticker: state.ticker,
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchBitcoinPrices })(GeminiTicker);
