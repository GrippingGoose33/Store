import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home";
import Store from "./Store";
import Details from "./Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Tienda" component={Store}/>
        <Stack.Screen name="Details" component={Details} options={{title:"Objetos"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}