import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { Polyline } from "react-native-maps";
import { AUTOCOMPLETE_MAPS_APIKEY } from "@env";

const Map = ({ origin, destination }) => {
  const [coorddata, setCoorddata] = useState(null);
  const [formattedCoordinate, setformattedCords] = useState(null);
  const routeCoords = () => {
    const url = `https://api.geoapify.com/v1/routing?waypoints=${origin.location.latitude}%2C${origin.location.longitude}%7C${destination.location.latitude}%2C${destination.location.longitude}&mode=drive&apiKey=${AUTOCOMPLETE_MAPS_APIKEY}`;
    fetch(url, { method: "get" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoorddata(data);
      });
  };
  const formattedCoords = () => {
    const temp = [];
    if (coorddata) {
      coorddata.features[0].geometry.coordinates[0].map(
        ([longitude, latitude]) => {
          temp.push({
            longitude: longitude,
            latitude: latitude,
          });
        }
      );
      temp.unshift({
        latitude: origin.location.latitude,
        longitude: origin.location.longitude,
      });
      temp.push({
        latitude: destination.location.latitude,
        longitude: destination.location.longitude,
      });
      setformattedCords(temp);
    }
  };
  useEffect(() => {
    destination && routeCoords();
    console.log("here");
    console.log(coorddata);
  }, [destination]);
  useEffect(() => {
    formattedCoords();
    console.log(formattedCoordinate);
  }, [coorddata]);
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
            {coorddata && (
              <Polyline
                coordinates={formattedCoordinate}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={["#7F0000"]}
                strokeWidth={3}
              />
            )}
          </>
        )}
      </MapView>
    </View>
  );
};

export default Map;