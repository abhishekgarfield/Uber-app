import { useNavigation } from "@react-navigation/native";
import { View ,Text} from "react-native";
const NavigationCard=()=>{
    const navigation=useNavigation();
    return(
        <View style={{backgroundColor:"red"}}>
<Text onPress={()=>{
    navigation.navigate("rideoptionscard")
}}>navigationcard</Text>
        </View>
    );
}
export default NavigationCard;