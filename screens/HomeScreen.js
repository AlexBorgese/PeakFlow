import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View>
				<AppHeader />
			</View>
		);
	}
}
