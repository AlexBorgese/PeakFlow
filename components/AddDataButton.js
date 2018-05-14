import React from 'react';
import { Modal, Button, View } from 'react-native';
import { connect } from 'react-redux';

import { openModal } from '../actions/AddDataActions';

function mapStateToProps(state) {
	return {
		isOpen: state.isOpen
	};
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: () => dispatch(openModal())
	};
}

const AddDataButton = () => (
    <View>
        <Button onPress={ openModal } title="Add Data!" />
    </View>
);

export default connect(mapStateToProps, mapDispatchToProps)(AddDataButton);

