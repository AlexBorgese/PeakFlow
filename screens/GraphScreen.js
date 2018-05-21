import React from 'react';
import { ScrollView, StyleSheet, Modal, View, Text, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect } from 'react-redux';

import AddDataButton from '../components/AddDataButton';

function mapStateToProps(state) {
	return {
		isOpen: state.isOpen,
		data: state.data
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveData: (data) => dispatch(saveData(data)),
		getData: () => dispatch(getData())
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
									this.setModalVisible(!this.props.isOpen);
								}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.props.isOpen);
								}}>
								<Text>Add Data</Text>
							</TouchableHighlight>
						</View>
					</View>
		 		</Modal>
				 <Text>
					 { this.props.data }
				</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);
