import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NavOptions from "../components/navOptions";
import { AUTOCOMPLETE_MAPS_APIKEY } from "@env";
import { Icon } from "react-native-elements";
import { setDestination, setOrigin } from "../features/navslice";
import { TouchableOpacity } from "react-native";

const Homescreen = () => {
  const [text, setText] = useState("");

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "column", padding: 15 }}>
        <Image
          style={{
            height: 50,
            width: 100,
            resizeMode: "contain",
            padding: 10,
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        {/*
        <GooglePlacesAutocomplete
          placeholder="Where to go?"
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key:GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        */}
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
                dispatch(setOrigin(null));
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
                    setOrigin({
                      location: {
                        
                        latitude: properties.lat,
                        longitude: properties.lon,
                      },
                      description: `${properties.name},${properties.state},${properties.country}`,
                    })
                  );
                  setData({});
                  dispatch(setDestination(null));
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
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
