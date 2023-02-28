import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { setDestination } from "../features/navslice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { AUTOCOMPLETE_MAPS_APIKEY } from "@env";
import Navfav from "./navfov";
import { ScrollView } from "react-native-gesture-handler";
const NavigationCard = () => {
  const destination = useSelector((state) => state.navigation.destination);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (destination) {
      setText(destination.description);
    }
  });
  return (
    <>
      <View
        style={{ backgroundColor: "white", paddingHorizontal: 15, flexGrow: 0 }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Welcome Abhishek !
        </Text>
        <View
          style={{
            backgroundColor: "rgb(247, 245, 245)",
            borderRadius: 5,
            marginVertical: 15,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            onChangeText={(newText) => {
              setText(newText);

              const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${AUTOCOMPLETE_MAPS_APIKEY}`;
              if (text.length >= 0) {
                fetch(url, { method: "GET" })
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    setData(data);
                  });
              }
            }}
            defaultValue={text}  
            style={{
              flexGrow: 1,
              flexBasis: 20,
              fontSize: 20,
              backgroundColor: "rgb(247, 245, 245)",
              paddingHorizontal: 8,
              paddingVertical: 17,
            }}
            placeholder="Where to go ?"  d
          />
          {text?.length > 0 && (
            <Icon
              name="close"
              type="antdesign"
              color="white"
              size={10}
              onPress={() => {
                setData({});
                setText("");
                dispatch(setDestination(null));
              }}
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                padding: 5,
                marginVertical: 5,
              }}
            />
          )}
        </View>
        {data.features?.map(({ properties }, index) => {
          if (properties.name) {
            return (
              <TouchableOpacity
                onPress={() => {
                  setText(
                    `${properties.name},${properties.state},${properties.country}`
                  );
                  dispatch(
                    setDestination({
                      location: {
                        longitude: properties.lon,
                        latitude: properties.lat,
                      },
                      description: `${properties.name},${properties.state},${properties.country}`,
                    })
                  );
                  navigation.navigate("rideoptionscard");
                  setData({});
                }}
                key={index}
                style={{
                  borderBottomColor: "lightgrey",
                  marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              >
                <Text
                  style={{ fontWeight: 15, fontWeight: "700", padding: 7 }}
                >{`${properties.name},${properties.state},${properties.country}`}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
        }}
      >
        <Navfav />
        <View
          style={{
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "black",
              padding: 15,
              borderRadius: 30,
              alignItems: "center",
            }}
            onPress={() => {
              if (destination) {
                navigation.navigate("rideoptionscard");
              } else {
                navigation.navigate("errorscreen", {
                  error: "Kindly select your destination",
                });
              }
            }}
          >
            <Icon
              style={{ backgroundColor: "black" }}
              type="font-awesome"
              name="car"
              color="white"
              size={16}
            />
            <Text style={{ color: "white", marginHorizontal: 10 }}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "lightgrey",
              padding: 15,
              borderRadius: 30,
              alignItems: "center",
            }}
            disabled={true}
          >
            <Icon
              type="ionicon"
              name="fast-food-outline"
              color="black"
              size={16}
            />
            <Text style={{ marginHorizontal: 10 }}>Rides</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default NavigationCard;
