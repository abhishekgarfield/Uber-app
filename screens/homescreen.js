import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
    <SafeAreaView style={{ backgroundColor:"white"}}>
      <View style={{flexGrow:1,backgroundColor:"yellow"}}>
        <Image style={{height:100,width:100,resizeMode:"contain"}} source={{
            uri:"https://links.papareact.com/gzs"
        }} />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
