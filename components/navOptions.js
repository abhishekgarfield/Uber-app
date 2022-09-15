import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import ErrorScreen from "../screens/errorshow";
import Navfav from "./navfov";
const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "mapscreen",
  },
  {
    id: 2,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eatscreen",
  },
];
const NavOptions = () => {
  const origin = useSelector((state) => state.navigation.origin);
  const navigation = useNavigation();
  return (
    <View style={{}}>
      {/*
            <ScrollView
            horizontal
            contentContainerStyle={{}}>
            {data.map((item)=>
             <>
                <Text>{item.title}</Text></>
            )}
            </ScrollView>
            */}
      <FlatList
        style={{ marginHorizontal: 10 }}
        horizontal
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
            disabled={!origin}
              onPress={() => {
                if(item.screen=="Eatscreen")
                {
                  navigation.navigate("errorscreen",{
                    error:"Uber eats not available yet"
                  })
                }
                else{
                navigation.navigate(item.screen);
                }
              }}
            >
              <View
                style={(origin)?{
                  backgroundColor: "lightgrey",
                  alignItems: "flex-start",
                  marginHorizontal: 10,
                  width: 150,
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  justifyContent: "center",
                }:{
                  opacity:0.6,backgroundColor: "lightgrey",
                alignItems: "flex-start",
                marginHorizontal: 10,
                width: 150,
                paddingHorizontal: 15,
                paddingVertical: 15,
                justifyContent: "center",}}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 160,
                    height: 110,
                    resizeMode: "contain",
                    marginVertical: 3,
                  }}
                />
                <Text style={styles.title}> {item.title}</Text>
                <Icon
                  name="arrowright"
                  type="antdesign"
                  color="white"
                  style={{
                    backgroundColor: "black",
                    borderRadius: 50,
                    padding: 5,
                    marginVertical: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
            
          </>
        )}
      />
      <Navfav/>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 7,
  },
});
export default NavOptions;
