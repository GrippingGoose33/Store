import React from 'react';
import {Button, View, Text } from 'react-native';
import './styles.js';
import styles from './styles';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                source='./assets/tienda_tecnologia.jpg'
            />
            <Text style={styles.text}>Home</Text>
            <Button 
            title="ir a la Tienda"
            onPress={() => navigation.navigate('Tienda')}
            />
        </View>
    );
}

export default Home;