import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Bottom from './Bottom';

function Details({route, navigation}) {

    const {id, description, img, stock} = route.params;

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "purple"}}>
            <Text>Details Screen</Text>
            <Image
                style={styles.Logo}
                source={{uri:img}}
            />

            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <Text>En stock: {stock}</Text>
            <Bottom navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DC0CF5",
        borderWidth: 1,
        borderRadius: 0,
        margin: 10,
        color: "blue",
    },

    Logo: {
        width: 180,
        height: 180,
      },
})

export default Details;