import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import { useState } from "react";
import { setDestination } from "../features/navslice";
import { useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import {AUTOCOMPLETE_MAPS_APIKEY} from "@env";
const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  return (
    <View>
      <View
        style={{
          backgroundColor: "rgb(247, 245, 245)",
          borderRadius: 5,
          marginVertical: 20,
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
                  data.features?.map(({ properties }) => {
                    console.log(properties.name);
                  });
                });
            }
          }}
          defaultValue={text}
          style={{
            flexGrow: 1,
            fontSize: 20,
            backgroundColor: "rgb(247, 245, 245)",
            padding: 8,
          }}
          placeholder="Where to go ?"
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
  );
};
export default NavigationCard;