import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NavOptions from "../components/navOptions";
import navslice, { add } from "../features/navslice";

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
    <SafeAreaView style={{ backgroundColor: "white" ,flexDirection:"column",}}>
      <View style={{ flexGrow: 1,padding:15 ,flexGrow:1}}>
        <Image
          style={{ height: 100, width: 100, resizeMode: "contain" ,padding:10}}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

export default Homescreen;
