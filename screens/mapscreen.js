import { Text } from "react-native";
import { useSelector } from "react-redux";

const Mapscreen=()=>{
    const origin=useSelector(state=>state.navigation.origin)
    return(
        <>
        <Text>{origin.description}</Text>
        </>
    );
}

export default Mapscreen;