import React from 'react';
import { ScrollView, StyleSheet, Modal, View, Text, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect } from 'react-redux';

import AddDataButton from '../components/AddDataButton';

function mapStateToProps(state) {
	return {
		isOpen: state.isOpen
	};
}

class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Links',
	};

	render() {
		return (
			<ScrollView style={styles.container}> 
				<Modal
					animationType="slide"
					transparent={false}
					visible={ this.props.isOpen }
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}>
					<View style={{marginTop: 22}}>
						<View>
							<Text>Add all the data</Text>
							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.props.modalVisible);
								}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
		 		</Modal>
				<AddDataButton style={ styles.button }/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
	button: {
		bottom: 0,
		paddingBottom: 10
	}
});

export default connect(mapStateToProps)(LinksScreen);
