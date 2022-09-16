import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Icon } from "react-native-elements";
const Final = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexGrow: 1, backgroundColor: "white" }}>
      <View style={{ position: "absolute", zIndex: 2, right: 4, top: 5 }}>
        <Icon
          onPress={() => {
            navigation.navigate("homescreen");
          }}
          name="close"
          type="antdesign"
          color="white"
          size={30}
          style={{
            backgroundColor: "red",
            borderRadius: 50,
            padding: 3,
          }}
        />
      </View>
      <Image
        source={{
          uri: "https://media.giphy.com/media/ek3tx2Yd259RSg2SRk/giphy.gif",
        }}
        style={{
          flexGrow: 2,
          zIndex: -1,
          paddingHorizontal: 20,
          paddingTop: 100,
          marginTop: 100,
        }}
      />
      <Text
        iterationCount={1}
        animation="fadeInUp"
        style={{
          flexGrow: 1.5,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          paddingTop: 70,
          backgroundColor: "white",
        }}
      >
        Your ride is on its way !
      </Text>
    </View>
  );
};

export default Final;
