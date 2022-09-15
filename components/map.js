import { useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { Polyline } from "react-native-maps";

const Map = ({ origin, destination }) => {
    const routeCoords=()=>{

    }
    useEffect(()=>{
      routeCoords();
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
          pinColor="green"
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
          pinColor="red"
            title="destination"
            description={destination.description}
            identifier="destination"
            coordinate={{
              latitude: destination.location.latitude,
              longitude: destination.location.longitude,
            }}
          />
          <Polyline
        
        coordinates={[destination.location,origin.location]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={3}/>
          </>
        )}
        
        
      </MapView>
    </View>
  );
};

export default Map;
