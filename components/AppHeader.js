import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => (
	<Header
		leftComponent={{ icon: 'menu', color: '#fff' }}
		centerComponent={{ text: 'PeakFlow', style: { color: '#fff' } }}
		rightComponent={{ icon: 'home', color: '#fff' }}
	/>
);

export default AppHeader;
