import React from 'react';
import {View, Text, Image} from 'react-native';
import Bottom from './Bottom';

function Details({route, navigation}) {

    const {id, description, imagen} = route.params;

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>
            <Image
                source={{uri:{img}}}
            />

            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <Bottom navigation={navigation} />
        </View>
    );
}

export default Details;