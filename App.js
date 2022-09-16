import { KeyboardAvoidingView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/homescreen";
import { Provider } from "react-redux";
import { store } from "./store";
import Mapscreen from "./screens/mapscreen";
import ErrorScreen from "./screens/errorshow.js";
import Final from "./screens/final";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flexGrow: 1 }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen name="homescreen" component={Homescreen} />
              <Stack.Screen
                name="mapscreen"
                component={Mapscreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="errorscreen"
                component={ErrorScreen}
                options={{ headerShown: false, presentation: "modal" }}
              />
              <Stack.Screen
                name="final"
                component={Final}
                options={{ headerShown: false, presentation: "modal" }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
