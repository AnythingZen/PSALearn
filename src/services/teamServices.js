import axios from "axios";

const baseUrl = "https://psalearn-api.onrender.com/";

const getRemarks = () => {
	const request = axios.get(`${baseUrl}/api/indiv_strength`);
	return request.then((response) => {
		return response.data;
	});
};

const getMembers = () => {
	const request = axios.get(`${baseUrl}/api/group_generation`);
	return request.then((response) => {
		return response.data;
	});
};

export default { getRemarks, getMembers };
