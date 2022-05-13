import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import objetos from'./objetos';

function Box({id, description,}) {

    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Text>Objeto# {objetos.id}</Text>
                    <Image
                    style={styles.tinyLogo}
                        source={{uri:img}}
                    />

                    <Button
                        color="#455q64"
                        title="Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: id,
                        description: description,
                        img: img
                        })}
                    />
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderRadius: 0,
        margin: 10,
    },

    tinyLogo: {
        width: 50,
        height: 50,
      },
})

export default Box;