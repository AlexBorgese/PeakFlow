import { OPEN_MODAL, SAVE_DATA } from '../constants/AddDataConstants';

const cloneState = function (state) {
	return Object.assign({}, state);
};

let newState = { isOpen: false };

export default function (state, action) {
	switch (action.type) {
		case OPEN_MODAL:
			newState = cloneState(state);
			newState.isOpen = action.isOpen;
			return newState;
		case SAVE_DATA:
			newState = cloneState(state);
			newState.data = action.data;
			return newState;			
		default:
			return state || newState;
	}
}
