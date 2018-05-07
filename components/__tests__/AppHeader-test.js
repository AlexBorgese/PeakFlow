import 'react-native';
import React from 'react';
import { MonoText } from '../StyledText';
import renderer from 'react-test-renderer';

import AppHeader from '../AppHeader';

it('renders correctly', () => {
    const tree = renderer.create(<AppHeader />).toJSON();
  
    expect(tree).toMatchSnapshot();
});
