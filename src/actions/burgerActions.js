import {GET_BURGER_JOINTS} from "./types";
import axios from "axios";

export const getBurgerJoints = () => async dispatch => {
	const res = await axios.get(`https://mighty-spire-67811.herokuapp.com/`);
	dispatch ({
		type: GET_BURGER_JOINTS, 
		payload: res.data
	})
}
