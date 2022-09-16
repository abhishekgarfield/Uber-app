import { View } from "react-native";
import * as Animatable from "react-native-animatable";
const Final = () => {
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
            Your ride is on its way !
          </Text>
        </View>
      );
};

export default Final;
