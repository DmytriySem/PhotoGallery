import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';

function GetDescription(props) {
    const name = props.descr;
    return <View>Description:</View> + name ? "NO NAME" : name;
}

const Img = (props) => (
    <View>
        <Text>
            <GetDescription descr={props.description} />
        </Text>
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('PhotoScreen', { image_url: props.urlLarge })}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: props.url }} />
            </TouchableOpacity>
        </View>
        <Text>
            {props.author}
        </Text>
    </View>
);

export default Img;