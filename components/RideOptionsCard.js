import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "Uber-x-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-x-3",
    title: "UberX5",
    multiplier: 1.3,
    image: "https://links.papareact.com/7pf",
  },
  {
    id: "Uber-xl-456",
    title: "Uber XL",
    multiplier: 1.6,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-lux-789",
    title: "Uber LUX",
    multiplier: 2,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptionsCrad = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "yellow",
          flexGrow: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            flexGrow: 1,
            paddingVertical:7,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", left: 7, backgroundColor: "white" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" type="fontawesome" size={40} />
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", fontSize: 23, paddingVertical: 15 }}
          >
            Select a Ride
          </Text>
        </View>
      </SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => {
          return item.id;
        }}
        style={{flexGrow:2}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={(selected?.id==item.id)?{flexDirection: "row",
              flexGrow: 1,
              alignItems: "center",
              backgroundColor: "lightgrey"}:{
                flexDirection: "row",
                flexGrow: 1,
                alignItems: "center",
                backgroundColor: "white",
              }}
              onPress={() => {
                setSelected(item);
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 100,
                  width: 100,
                  resizeMode: "contain",
                  flexGrow: 0.5,
                  paddingHorizontal: 20,
                }}
              />
              <View style={{ alignItems: "center", flexGrow: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    paddingBottom: 4,
                    fontWeight: "600",
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ textAlign: "center" }}>{item.id}</Text>
              </View>
              <Text style={{ fontSize: 20, flexGrow: 1, textAlign: "center" }}>
                ₹99
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <SafeAreaView style={{ backgroundColor: "white",marginTop:10 }}>
        <TouchableOpacity
          style={{
            flexGrow: 1,
            backgroundColor: "black",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 25,
              padding: 15,
              fontWeight: "500",
            }}
          >
            {selected ? selected.title : "Choose your ride"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
export default RideOptionsCrad;
