import React from 'react';

import { createStackNavigator } from 'react-navigation';
import Gallery from './Screens/Gallery';
import Photo from './Screens/Photo';

const AppNavigator = createStackNavigator({
  GalleryScreen: { screen: Gallery },
  PhotoScreen: { screen: Photo }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
