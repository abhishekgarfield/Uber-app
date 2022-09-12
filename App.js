import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/homescreen";

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homescreen" component={Homescreen}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
