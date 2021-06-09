import axios from 'axios';

const initState = {
	popular: [],
	newGames: [],
	upcoming: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GAME':
			return {
				...state,
				popular: action.payload.popular,
				newGames: action.payload.newGames,
				upcoming: action.payload.upcoming,
			};
		default:
			return { ...state };
	}
};

export default gamesReducer;
