import { OPEN_MODEL } from '../constants/AddDataConstants';

export function openModal() {
	return {
		type: OPEN_MODEL,
		isOpen: true
	};
}
