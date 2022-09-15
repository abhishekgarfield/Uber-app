import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const RideOptionsCrad = () => {
  const navigation=useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text>rideoptions</Text>
    </View>
  );
};
export default RideOptionsCrad;
