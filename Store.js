import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import './styles.js';
import Box from './Box';
import Bottom from './Bottom';
import objetos from './objetos';


function Store({navigation}) {

    return (
        <View style = {styles.root}>
            <ScrollView>
            <View style = {styles.containerBox}>
                {
                objetos.map((objetos, v)=> (
                    <Box key={v}
                    img = {objetos.img}
                    id = {objetos.id}
                    desctiption = {objetos.description}
                />
                
                ))
                }
            </View>
            </ScrollView>

            <   Bottom navigation={navigation} />
    
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccff90'
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

})

export default Store;