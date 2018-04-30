import React from 'react';
import { Alert, Button } from 'react-native';

const AddDataButton = () => (
    <Button onPress={() => (Alert.alert('It Worked!'))} title="Click me" />
);

export default AddDataButton;
