import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Icon } from "react-native-elements";

const ErrorScreen = () => {
  const navigation = useNavigation();
  const {
    params:{
      error
    }
  }=useRoute();
  return (
    <View style={{ flexGrow: 1,backgroundColor:"white" }}>
      <View style={{ position: "absolute", zIndex: 2, right: 4, top: 5 }}>
        <Icon
        onPress={()=>{
          navigation.goBack();
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
          uri: "https://media.giphy.com/media/CNHwfdaHPNYQPzAIoS/giphy.gif",
        }}
        style={{ flexGrow: 2, zIndex: -1 }}
      />
      <Text
        iterationCount={1}
        animation="fadeInUp"
        style={{
          flexGrow: 1,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          backgroundColor: "white",
        }}
      >
        {error}
      </Text>
    </View>
  );
};
export default ErrorScreen;
