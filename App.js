import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/homescreen";
import { Provider } from "react-redux";
import { store } from "./store";
import Mapscreen from "./screens/mapscreen";
import ErrorScreen from "./screens/errorshow.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="homescreen" component={Homescreen} />
            <Stack.Screen name="mapscreen" component={Mapscreen}
            options={{headerShown:false}}/>
            <Stack.Screen name="errorscreen" component={ErrorScreen}
            options={{headerShown:false,presentation:"modal"}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
