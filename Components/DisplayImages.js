import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Image from './Image';

const DisplayImages = (props) => {
    let imgs = props.data.map(img =>
        <Image navigation={props.navigation}
            url={img.urls.small}
            urlLarge={img.urls.full}
            author={img.user.name}
            name={img.description}
            key={img.id} />);

    return (
        <View style={styles.images}>
            {imgs}
        </View>
    );
};

export default DisplayImages;

const styles = StyleSheet.create({
images: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
})
