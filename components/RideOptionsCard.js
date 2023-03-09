import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-x-123", 
    title: "UberX",
    multiplier: 10,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-x-3",
    title: "UberX5",
    multiplier: 15,
    image: "https://links.papareact.com/7pf",
  },
  {
    id: "Uber-xl-456",
    title: "Uber XL",
    multiplier: 25,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-lux-789",
    title: "Uber LUX",
    multiplier: 30,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptionsCrad = () => {
  const timeinfo = useSelector(
    (state) => state.navigation.travelTimeinformation
  );
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
            paddingVertical: 7,
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
        style={{ flexGrow: 2 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={
                selected?.id == item.id
                  ? {
                      flexDirection: "row",
                      flexGrow: 1,
                      alignItems: "center",
                      backgroundColor: "lightgrey",
                    }
                  : {
                      flexDirection: "row",
                      flexGrow: 1,
                      alignItems: "center",
                      backgroundColor: "white",
                      paddingHorizontal: 10,
                    }
              }
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
                <Text style={{ textAlign: "center" }}>
                  {timeinfo?.time}
                  <Text style={{ color: "green" }}>{timeinfo?.distance}</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 20, flexGrow: 1, textAlign: "center" }}>
                {`₹${item.multiplier * parseFloat(timeinfo?.distance)}`}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <SafeAreaView style={{ backgroundColor: "white", marginTop: 10 }}>
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
          onPress={() => {
            if (selected) {        
              navigation.navigate("final");
            } else {
              navigation.navigate("errorscreen", {
                error: "Select your ride first !",
              });
            }
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
