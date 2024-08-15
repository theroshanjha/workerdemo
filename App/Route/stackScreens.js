import React  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import Home from "../Screens/Home";




const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />

  </Stack.Navigator>
  ) 
}

export { MainStackNavigator };