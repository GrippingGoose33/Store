import React from 'react';
import {View, Text} from 'react-native';

function Details({route, navigation}) {

    const {id, description} = route.params;

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>

            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <Bottom navigation={navigation} />
        </View>
    );
}

export default Details;