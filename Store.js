import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import './styles.js';
import styles from './styles';
import Box from './Box';
import NavegationBottom from './NavigationBottom';
import tasks from './Data/Task';


function Store({navigation}) {

    return (
        <View style = {styles.root}>
            <ScrollView>
            <View>
                <Image
                    style = {
                        'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SY355_.jpg'
                    }
                />
            </View>
            </ScrollView>

            <NavegationBottom navigation={navigation} />
    
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