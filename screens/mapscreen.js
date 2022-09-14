import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { useEffect } from "react";

const Mapscreen = () => {
  const origin = useSelector((state) => state.navigation.origin);
  useEffect(() => {
    console.log(origin.description);
  }, []);
  return (
    <View style={{ flexDirection: "column", display: "flex", flexGrow: 1 }}>
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
      <View style={{ backgroundColor: "yellow", flexGrow: 1 }}>
        <Text>helo</Text>
      </View>
    </View>
  );
};

export default Mapscreen;
