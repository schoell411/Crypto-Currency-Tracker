const initialState = {
	isLoading: false,
	ticker: null,
	error: ""
};

const bitcoinReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHING_BITCOIN_PRICES":
			return {
				...state,
				isLoading: true
			};
		case "FETCHING_BITCOIN_SUCCESS":
			return {
				...state,
				isLoading: false,
				ticker: action.payload
			};
		default:
			return state;
	}
};

export { bitcoinReducer };
