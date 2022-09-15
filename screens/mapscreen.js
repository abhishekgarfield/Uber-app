import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "../components/map";
import { NavigationContainer } from "@react-navigation/native";
import NavigationCard from "../components/NavigationCard";
import RideOptionsCrad from "../components/RideOptionsCard";

const Mapscreen = () => {
  const Stack = createStackNavigator();
  const origin = useSelector((state) => state.navigation.origin);
  const destination = useSelector((state) => state.navigation.destination);
  useEffect(() => {
    console.log(origin.description);
  }, []);
  return (
    <View style={{ flexDirection: "column", display: "flex", flexGrow: 1 }}>
      <Map origin={origin} destination={destination} />
      <View style={{ backgroundColor: "yellow", flexGrow: 1 }}>
        <Stack.Navigator>
          <Stack.Screen
            name="navigationcard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="rideoptionscard" component={RideOptionsCrad} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Mapscreen;
