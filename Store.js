import React from 'react';
import {StyleSheet, View} from 'react-native';
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
            {
                tasks.map((task, v)=> (
                <Box key={v}
                id = {task.idd}
                desctiption = {task.description}
                />

                ))
            }
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

    containerNavBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        padding: 5,
        width:'100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
    }

})

export default Store;