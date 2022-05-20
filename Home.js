import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import './styles.js';
import styles from './styles';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.Logo}
                source={require('./assets/tienda_tecnologia.jpg')}
            />
            <Text style={styles.textH1}>La tienda en linea</Text>
            <Text style={styles.text}>La tienda de tecnologia donde hay servicio 24-7 y si atraso a tus entregas</Text>
            <Button 
            title="ir a la Tienda"
            onPress={() => navigation.navigate('Tienda')}
            />
        </View>
    );
}

export default Home;