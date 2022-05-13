import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Store from "./Store";
import Details from "./Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Tienda" component={Store}/>
        <Stack.Screen name="Details" component={Details} options={{title:"Objetos"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}