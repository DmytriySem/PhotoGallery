import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Photo extends Component {
  render() {
    return (
      <View>
        <Image style={{width: '100%', height: '100%'}} source={{uri: this.props.navigation.state.params.image_url}}/>
      </View>
    )
  }
}