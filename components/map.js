import { useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { Polyline } from "react-native-maps";

const Map = ({ origin, destination }) => {
    const routeCoords=()=>{

    }
    useEffect(()=>{
      routeCoords();
      console.log(destination?.location);
    },[destination])
  return (
    <View style={{ backgroundColor: "red", flexGrow: 1 }}>
      <MapView
        style={{ flexGrow: 1 }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.latitude,
          longitude: origin.location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          title="origin"
          description={origin.description}
          identifier="origin"
          coordinate={{
            latitude: origin.location.latitude,
            longitude: origin.location.longitude,
          }}
        />
        {destination && (
            <>
          <Marker
            title="destination"
            description={destination.description}
            identifier="destination"
            coordinate={{
              latitude: destination.location.latitude,
              longitude: destination.location.longitude,
            }}
          />
          <Polyline/>
          </>
        )}
        
        
      </MapView>
    </View>
  );
};

export default Map;
