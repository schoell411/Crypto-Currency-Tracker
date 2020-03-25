import axios from "axios";

export const fetchBitcoinPrices = () => {
	return dispatch => {
		dispatch({ type: "FETCHING_BITCOIN_PRICES" });
		axios
			.get("https://api.gemini.com/v2/ticker/btcusd")
			.then(res => {
				console.log(res);
				dispatch({ type: "FETCHING_BITCOIN_SUCCESS", payload: res.data });
			})
			.catch(err => console.log(err));
	};
};
