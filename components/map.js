import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";;
import { NavigationContainer } from "@react-navigation/native";
import  NavigationCard from "../components/NavigationCard";
import RideOptionsCrad from "../components/RideOptionsCard"


const Map=({origin})=>{
    return(
        <View style={{ backgroundColor: "red", flexGrow: 1 }}>
        <MapView
          style={{ flexGrow: 1 }}
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
          title="origin"
          description={origin.description}
          identifier="origin"
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.long,
            }}
          />
        </MapView>
        </View>
    );
}

export default Map;