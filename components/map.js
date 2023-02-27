import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Polyline } from "react-native-maps";
import { AUTOCOMPLETE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { settraveTimeinformation } from "../features/navslice";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Map = ({ origin, destination }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [coorddata, setCoorddata] = useState(null);
  const [formattedCoordinate, setformattedCords] = useState(null);

  const mapRef = useRef(null);
  const routeCoords = () => {
    const url = `https://api.geoapify.com/v1/routing?waypoints=${origin.location.latitude}%2C${origin.location.longitude}%7C${destination.location.latitude}%2C${destination.location.longitude}&mode=drive&apiKey=${AUTOCOMPLETE_MAPS_APIKEY}`;
    fetch(url, { method: "get" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(
          settraveTimeinformation({
            time: data.features[0].properties.time / 60,
            distance:
              (data.features[0].properties.distance / 1000).toFixed(1) + " km",
          })
        );
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
  }, [destination]);
  useEffect(() => {
    formattedCoords();
  }, [coorddata]);
  useEffect(() => {
    if (origin && destination) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        mapPadding: { top: 50, right: 50, bottom: 50, left: 100 },
      });
    } else if (origin && !destination) {
      mapRef.current.fitToSuppliedMarkers(["origin"]);
    } else {
      return;
    }
  }, [origin, destination]);
  return (
    <View style={{ backgroundColor: "white", flexGrow: 1 }}>
      <SafeAreaView
        style={{ position: "absolute", zIndex: 1, left: 15, top: 10 }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrowleft"
            type="antdesign"
            color="white"
            size={28}
            style={{
              backgroundColor: "black",
              borderRadius: 50,
              padding: 5,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <MapView
        ref={mapRef}
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
              style={{}}
                coordinates={formattedCoordinate}
                strokeColor="black" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={["black"]}
                strokeWidth={3}
                lineDashPattern={[1]}

              />
              
            )}
          </>
        )}
      </MapView>
    </View>
  );
};

export default Map;
