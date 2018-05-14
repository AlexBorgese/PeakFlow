import { openModal } from '../actions/AddDataActions';
import { OPEN_MODAL } from '../constants/AddDataConstants';

const cloneState = function (state) {
	return Object.assign({}, state);
};

let newState = { isOpen: false };

export default function (state, action) {
	switch (action.type) {
		case OPEN_MODAL:
			console.log('open modal');
			newState = cloneState(state);
			newState.isOpen = action.isOpen;
			return newState;
		default:
			return state || newState;
	}
}
