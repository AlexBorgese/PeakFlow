import { AsyncStorage } from 'react-native';
import { OPEN_MODEL, SAVE_DATA, GET_DATA } from '../constants/AddDataConstants';

export function openModal() {
	return {
		type: OPEN_MODEL,
		isOpen: true
	};
}

export function saveData(data) {
	AsyncStorage.setItem('data', data);
	return {
		type: SAVE_DATA,
		data
	};
}

export function getData() {
	AsyncStorage.getItem('data');
	return {
		type: GET_DATA,
		data
	};
}
