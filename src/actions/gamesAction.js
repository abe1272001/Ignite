import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api';
//Action Creator

export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingGamesData = await axios.get(upcomingGamesURL());
	console.log(popularData);
	console.log(newGamesData);
	console.log(upcomingGamesData);
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingGamesData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};
