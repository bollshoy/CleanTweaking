import {SET_IS_MOBILE} from "./action.js";

const initialState = {
	isMobile: false,
}

export const deviceReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_MOBILE:
			return {
				...state,
				isMobile: action.payload,
			};
		default:
			return state;
	}
}