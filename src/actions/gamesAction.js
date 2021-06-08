import axios from 'axios';
import { popularGamesURL } from '../api';
//Action Creator

export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesURL());
	console.log(popularData);
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
		},
	});
};
