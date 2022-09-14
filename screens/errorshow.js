import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Image, Text } from "react-native-animatable";
import { Icon } from "react-native-elements";

import { SparklesIcon } from "react-native-heroicons/solid";

import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ErrorScreen = () => {
    const navigation=useNavigation();
  return (
    
    <View style={{ flexGrow: 1,position:"relative" }}>
        <SparklesIcon size={30} color={"red"}/>
      <Image
        source={{
          uri: "https://media.giphy.com/media/CNHwfdaHPNYQPzAIoS/giphy.gif",
        }}
        style={{ flexGrow: 2 }}
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
        Kindly select your destination
      </Text>
    </View>
  );
};
export default ErrorScreen;
