import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';

//Fetch is a method in JS that allows the user to retrieve resources from a server (GET, POST, U)
export const fetchFromTMDB = async (url) => {
  //Initliaze options variable so we dont have to reinstantiate the Fetch key everytime
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
		},
	};

	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};