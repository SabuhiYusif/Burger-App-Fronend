import {GET_BURGER_JOINTS} from "./types";
import axios from "axios";

export const getBurgerJoints = () => async dispatch => {
	const res = await axios.get(`http://localhost:8080/`);
	dispatch ({
		type: GET_BURGER_JOINTS, 
		payload: res.data
	})
}
