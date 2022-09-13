import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/homescreen";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="homescreen" component={Homescreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
