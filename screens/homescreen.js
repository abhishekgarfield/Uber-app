import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NavOptions from "../components/navOptions";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
const Homescreen = () => {
  const data = useSelector((state) => {
    return state.navigation.items;
  });
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
            height: 100,
            width: 100,
            resizeMode: "contain",
            padding: 10,
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to go?"
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
        <NavOptions />
      </View>

      
    </SafeAreaView>
  );
};

export default Homescreen;
