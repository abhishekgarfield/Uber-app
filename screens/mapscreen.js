import { SafeAreaView, View } from "react-native";
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
  
  return (
    <View style={{ flexDirection: "column", display: "flex", flexGrow: 1 }}>
      <Map origin={origin} destination={destination} />
      <SafeAreaView style={{flexGrow: 1 ,backgroundColor:"white"}}>
      
        <Stack.Navigator>
          <Stack.Screen
            name="navigationcard"
            component={NavigationCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="rideoptionscard" component={RideOptionsCrad} />
        </Stack.Navigator>
        
      </SafeAreaView>
    </View>
  );
};

export default Mapscreen;
