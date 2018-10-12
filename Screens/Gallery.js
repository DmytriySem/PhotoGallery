import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DisplayImages from '../Components/DisplayImages';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    let YOUR_ACCESS_KEY = "c8820dbd1ad85cbbf0e357d033460e4931dd8b02d0f8526ca8b0300cfcc7bae8";
    fetch("https://api.unsplash.com/photos/?client_id=" + YOUR_ACCESS_KEY)
      .then(res => res.json())
      .then(data => {
        this.setState({ imgs: data });
      })
      .catch(err => {
        console.log('Error happened during fetch!', err);
      })
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>GALLERY</Text>
        <DisplayImages data={this.state.imgs} navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default Gallery;

const styles = StyleSheet.create({
  title: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
