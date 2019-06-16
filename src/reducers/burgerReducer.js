import {GET_BURGER_JOINTS} from "../actions/types";

const initialState = {
	burger_joints: []
}

export default function(state = initialState, action){
	switch(action.type) {
		case GET_BURGER_JOINTS:
			return {
					...state,
					burger_joints: action.payload
			}
		default:
			return state;
	}
}
